/**
 * GOOGLE DRIVE SERVICE
 *
 * Handles all Google Drive operations for generated images:
 * - Upload images to Google Drive (FREE 15GB)
 * - Store metadata for each image
 * - List and retrieve images
 * - Delete images
 * - No charges - uses your personal Google Drive storage
 */

import type { ImageMetadata, GoogleDriveConfig, PromptData, GenerationSettings } from '../types';

/**
 * Default folder name for storing images
 */
export const DEFAULT_DRIVE_FOLDER = 'StudioV Generated Images';

/**
 * Upload a base64-encoded image to Google Drive
 * Returns the metadata object with Drive URLs
 */
export async function uploadImageToGoogleDrive(
  base64Image: string,
  promptData: PromptData,
  settings: GenerationSettings,
  conceptName: string,
  config: GoogleDriveConfig
): Promise<ImageMetadata> {
  const { accessToken, folderName = DEFAULT_DRIVE_FOLDER } = config;

  // Generate unique filename with timestamp
  const timestamp = Date.now();
  const date = new Date(timestamp);
  const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = date.toTimeString().split(' ')[0].replace(/:/g, ''); // HHMMSS
  const milliseconds = String(timestamp % 1000).padStart(3, '0');

  // Sanitize concept name for filename
  const safeConcept = conceptName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const filename = `${safeConcept}-${dateStr}-${timeStr}-${milliseconds}.png`;
  const metadataFilename = `${safeConcept}-${dateStr}-${timeStr}-${milliseconds}.json`;

  // Convert base64 to blob
  const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
  const binaryString = atob(base64Data);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const blob = new Blob([bytes], { type: 'image/png' });

  // Get image dimensions
  const dimensions = await getImageDimensions(base64Image);

  // Create metadata object
  const metadata: ImageMetadata = {
    id: `img-${timestamp}`,
    filename,
    storageUrl: '', // Will be filled after upload
    downloadUrl: '', // Will be filled after upload
    timestamp,
    date: dateStr,
    promptData,
    settings,
    conceptName,
    intimacyLevel: settings.intimacyLevel,
    aspectRatio: settings.aspectRatio,
    modelId: settings.modelId,
    seed: settings.seed,
    size: blob.size,
    width: dimensions.width,
    height: dimensions.height,
  };

  try {
    // Get or create folder
    const folderId = await getOrCreateFolder(folderName, accessToken);

    // Upload image to Drive
    const imageFileId = await uploadFileToDrive(
      blob,
      filename,
      'image/png',
      folderId,
      accessToken
    );

    // Update metadata with Drive URLs
    metadata.storageUrl = `https://drive.google.com/file/d/${imageFileId}/view`;
    metadata.downloadUrl = `https://drive.google.com/uc?export=download&id=${imageFileId}`;

    // Make the image publicly accessible
    await makeFilePublic(imageFileId, accessToken);

    // Upload metadata JSON
    const metadataBlob = new Blob([JSON.stringify(metadata, null, 2)], { type: 'application/json' });
    await uploadFileToDrive(
      metadataBlob,
      metadataFilename,
      'application/json',
      folderId,
      accessToken
    );

    console.log(`✅ Image uploaded to Google Drive: ${metadata.storageUrl}`);
    return metadata;

  } catch (error) {
    console.error('Google Drive upload error:', error);
    throw new Error(`Failed to upload to Google Drive: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Get or create a folder in Google Drive
 */
async function getOrCreateFolder(
  folderName: string,
  accessToken: string
): Promise<string> {
  try {
    // Search for existing folder
    const searchUrl = `https://www.googleapis.com/drive/v3/files?q=name='${encodeURIComponent(folderName)}' and mimeType='application/vnd.google-apps.folder' and trashed=false`;

    const searchResponse = await fetch(searchUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!searchResponse.ok) {
      throw new Error(`Failed to search for folder: ${searchResponse.statusText}`);
    }

    const searchData = await searchResponse.json();

    // If folder exists, return its ID
    if (searchData.files && searchData.files.length > 0) {
      console.log(`✅ Using existing folder: ${folderName}`);
      return searchData.files[0].id;
    }

    // Create new folder
    const createUrl = 'https://www.googleapis.com/drive/v3/files';
    const folderMetadata = {
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
    };

    const createResponse = await fetch(createUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(folderMetadata),
    });

    if (!createResponse.ok) {
      throw new Error(`Failed to create folder: ${createResponse.statusText}`);
    }

    const createData = await createResponse.json();
    console.log(`✅ Created folder: ${folderName}`);
    return createData.id;

  } catch (error) {
    console.error('Failed to get/create folder:', error);
    throw error;
  }
}

/**
 * Upload a file to Google Drive
 */
async function uploadFileToDrive(
  blob: Blob,
  filename: string,
  mimeType: string,
  folderId: string,
  accessToken: string
): Promise<string> {
  // Create file metadata
  const metadata = {
    name: filename,
    mimeType: mimeType,
    parents: [folderId],
  };

  // Create multipart upload
  const boundary = '-------314159265358979323846';
  const delimiter = `\r\n--${boundary}\r\n`;
  const closeDelimiter = `\r\n--${boundary}--`;

  const metadataPart = delimiter +
    'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
    JSON.stringify(metadata);

  const blobArray = await blob.arrayBuffer();
  const blobPart = delimiter +
    `Content-Type: ${mimeType}\r\n` +
    'Content-Transfer-Encoding: base64\r\n\r\n' +
    btoa(String.fromCharCode(...new Uint8Array(blobArray)));

  const multipartRequestBody = metadataPart + blobPart + closeDelimiter;

  const uploadUrl = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';

  const uploadResponse = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': `multipart/related; boundary=${boundary}`,
    },
    body: multipartRequestBody,
  });

  if (!uploadResponse.ok) {
    const errorBody = await uploadResponse.text();
    throw new Error(`Failed to upload file: ${errorBody}`);
  }

  const uploadData = await uploadResponse.json();
  return uploadData.id;
}

/**
 * Make a Google Drive file publicly accessible
 */
async function makeFilePublic(
  fileId: string,
  accessToken: string
): Promise<void> {
  try {
    const permissionUrl = `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`;

    await fetch(permissionUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role: 'reader',
        type: 'anyone',
      }),
    });
  } catch (error) {
    console.warn('Failed to make file public:', error);
  }
}

/**
 * List all images from Google Drive
 * Returns array of metadata objects
 */
export async function listImagesFromGoogleDrive(
  config: GoogleDriveConfig
): Promise<ImageMetadata[]> {
  const { accessToken, folderName = DEFAULT_DRIVE_FOLDER } = config;

  try {
    // Get folder ID
    const folderId = await getOrCreateFolder(folderName, accessToken);

    // List all JSON metadata files in the folder
    const listUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents and mimeType='application/json' and trashed=false&fields=files(id,name)`;

    const listResponse = await fetch(listUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!listResponse.ok) {
      throw new Error(`Failed to list files: ${listResponse.statusText}`);
    }

    const listData = await listResponse.json();
    const metadataFiles = listData.files || [];

    // Fetch and parse each metadata file
    const metadataPromises = metadataFiles.map(async (file: any) => {
      try {
        const fileUrl = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
        const fileResponse = await fetch(fileUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });

        if (fileResponse.ok) {
          return await fileResponse.json() as ImageMetadata;
        }
        return null;
      } catch (error) {
        console.error(`Failed to fetch metadata from ${file.name}:`, error);
        return null;
      }
    });

    const allMetadata = await Promise.all(metadataPromises);

    // Filter out null values and sort by timestamp (newest first)
    return allMetadata
      .filter((m): m is ImageMetadata => m !== null)
      .sort((a, b) => b.timestamp - a.timestamp);

  } catch (error) {
    console.error('Failed to list images from Google Drive:', error);
    throw error;
  }
}

/**
 * Delete an image and its metadata from Google Drive
 */
export async function deleteImageFromGoogleDrive(
  metadata: ImageMetadata,
  config: GoogleDriveConfig
): Promise<void> {
  const { accessToken } = config;

  try {
    // Extract file ID from storage URL
    const fileId = metadata.storageUrl.match(/\/d\/([^\/]+)/)?.[1];

    if (!fileId) {
      throw new Error('Could not extract file ID from URL');
    }

    // Delete image file
    const deleteImageUrl = `https://www.googleapis.com/drive/v3/files/${fileId}`;
    await fetch(deleteImageUrl, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    // Find and delete metadata file
    const metadataFilename = `${metadata.filename}.json`;
    const searchUrl = `https://www.googleapis.com/drive/v3/files?q=name='${encodeURIComponent(metadataFilename)}' and trashed=false`;

    const searchResponse = await fetch(searchUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (searchResponse.ok) {
      const searchData = await searchResponse.json();
      if (searchData.files && searchData.files.length > 0) {
        const metadataFileId = searchData.files[0].id;
        const deleteMetadataUrl = `https://www.googleapis.com/drive/v3/files/${metadataFileId}`;
        await fetch(deleteMetadataUrl, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
      }
    }

    console.log(`🗑️ Deleted image from Google Drive: ${metadata.filename}`);
  } catch (error) {
    console.error('Failed to delete image from Google Drive:', error);
    throw error;
  }
}

/**
 * Get image dimensions from base64 string
 */
function getImageDimensions(base64Image: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = () => {
      reject(new Error('Failed to load image for dimension calculation'));
    };
    img.src = base64Image;
  });
}

/**
 * Get storage statistics
 */
export async function getGoogleDriveStats(config: GoogleDriveConfig): Promise<{
  totalImages: number;
  totalSize: number;
  byDate: Record<string, number>;
  byConcept: Record<string, number>;
}> {
  const images = await listImagesFromGoogleDrive(config);

  const stats = {
    totalImages: images.length,
    totalSize: images.reduce((sum, img) => sum + img.size, 0),
    byDate: {} as Record<string, number>,
    byConcept: {} as Record<string, number>,
  };

  images.forEach(img => {
    // Count by date
    stats.byDate[img.date] = (stats.byDate[img.date] || 0) + 1;

    // Count by concept
    stats.byConcept[img.conceptName] = (stats.byConcept[img.conceptName] || 0) + 1;
  });

  return stats;
}
