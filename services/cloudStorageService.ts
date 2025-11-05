/**
 * CLOUD STORAGE SERVICE
 *
 * Handles all Google Cloud Storage operations for generated images:
 * - Upload images to Cloud Storage
 * - Store metadata for each image
 * - List and retrieve images
 * - Generate signed URLs for downloads
 * - Delete images
 */

import type { ImageMetadata, CloudStorageConfig, PromptData, GenerationSettings } from '../types';

/**
 * Default bucket name pattern
 * Users can override this in their settings
 */
export const DEFAULT_BUCKET_NAME = 'studiov-generated-images';

/**
 * Upload a base64-encoded image to Cloud Storage
 * Returns the metadata object with storage URLs
 */
export async function uploadImageToCloudStorage(
  base64Image: string,
  promptData: PromptData,
  settings: GenerationSettings,
  conceptName: string,
  config: CloudStorageConfig
): Promise<ImageMetadata> {
  const { projectId, bucketName, accessToken, region = 'us-east4' } = config;

  // Generate unique filename with timestamp (including milliseconds to prevent collisions)
  const timestamp = Date.now();
  const date = new Date(timestamp);
  const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD
  const timeStr = date.toTimeString().split(' ')[0].replace(/:/g, ''); // HHMMSS
  const milliseconds = String(timestamp % 1000).padStart(3, '0'); // Get last 3 digits for milliseconds

  // Sanitize concept name for filename
  const safeConcept = conceptName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const filename = `${safeConcept}-${dateStr}-${timeStr}-${milliseconds}.png`;
  const filepath = `images/${dateStr}/${filename}`;
  const metadataFilepath = `images/${dateStr}/${filename}.json`;

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
    storageUrl: `https://storage.googleapis.com/${bucketName}/${filepath}`,
    downloadUrl: `https://storage.googleapis.com/${bucketName}/${filepath}`,
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
    // Upload image to Cloud Storage
    const uploadUrl = `https://storage.googleapis.com/upload/storage/v1/b/${bucketName}/o?uploadType=media&name=${encodeURIComponent(filepath)}`;

    const imageUploadResponse = await fetch(uploadUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'image/png',
      },
      body: blob,
    });

    if (!imageUploadResponse.ok) {
      const errorBody = await imageUploadResponse.text();
      throw new Error(`Failed to upload image: ${errorBody}`);
    }

    // Upload metadata JSON
    const metadataBlob = new Blob([JSON.stringify(metadata, null, 2)], { type: 'application/json' });
    const metadataUploadUrl = `https://storage.googleapis.com/upload/storage/v1/b/${bucketName}/o?uploadType=media&name=${encodeURIComponent(metadataFilepath)}`;

    const metadataUploadResponse = await fetch(metadataUploadUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: metadataBlob,
    });

    if (!metadataUploadResponse.ok) {
      console.warn('Failed to upload metadata, but image was uploaded successfully');
    }

    // Make the image publicly accessible (optional)
    await makeObjectPublic(bucketName, filepath, accessToken);

    console.log(`✅ Image uploaded successfully: ${metadata.storageUrl}`);
    return metadata;

  } catch (error) {
    console.error('Cloud Storage upload error:', error);
    throw new Error(`Failed to upload to Cloud Storage: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Make a Cloud Storage object publicly accessible
 */
async function makeObjectPublic(
  bucketName: string,
  filepath: string,
  accessToken: string
): Promise<void> {
  try {
    const aclUrl = `https://storage.googleapis.com/storage/v1/b/${bucketName}/o/${encodeURIComponent(filepath)}/acl`;

    await fetch(aclUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        entity: 'allUsers',
        role: 'READER',
      }),
    });
  } catch (error) {
    console.warn('Failed to make object public:', error);
  }
}

/**
 * List all images from Cloud Storage
 * Returns array of metadata objects
 */
export async function listImagesFromCloudStorage(
  config: CloudStorageConfig,
  prefix: string = 'images/'
): Promise<ImageMetadata[]> {
  const { projectId, bucketName, accessToken } = config;

  try {
    const listUrl = `https://storage.googleapis.com/storage/v1/b/${bucketName}/o?prefix=${encodeURIComponent(prefix)}`;

    const response = await fetch(listUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to list images: ${response.statusText}`);
    }

    const data = await response.json();
    const items = data.items || [];

    // Filter for metadata JSON files
    const metadataFiles = items.filter((item: any) => item.name.endsWith('.json'));

    // Fetch and parse each metadata file using JSON API to avoid CORS issues
    const metadataPromises = metadataFiles.map(async (file: any) => {
      try {
        // Use the JSON API with Authorization header to avoid CORS errors
        const metadataUrl = `https://storage.googleapis.com/storage/v1/b/${bucketName}/o/${encodeURIComponent(file.name)}?alt=media`;
        const metadataResponse = await fetch(metadataUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });

        if (metadataResponse.ok) {
          return await metadataResponse.json() as ImageMetadata;
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
    console.error('Failed to list images from Cloud Storage:', error);
    throw error;
  }
}

/**
 * Delete an image and its metadata from Cloud Storage
 */
export async function deleteImageFromCloudStorage(
  metadata: ImageMetadata,
  config: CloudStorageConfig
): Promise<void> {
  const { bucketName, accessToken } = config;

  try {
    // Extract filepath from storage URL
    const filepath = metadata.storageUrl.replace(`https://storage.googleapis.com/${bucketName}/`, '');
    const metadataFilepath = `${filepath}.json`;

    // Delete image
    const imageDeleteUrl = `https://storage.googleapis.com/storage/v1/b/${bucketName}/o/${encodeURIComponent(filepath)}`;
    await fetch(imageDeleteUrl, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    // Delete metadata
    const metadataDeleteUrl = `https://storage.googleapis.com/storage/v1/b/${bucketName}/o/${encodeURIComponent(metadataFilepath)}`;
    await fetch(metadataDeleteUrl, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    console.log(`🗑️ Deleted image: ${metadata.filename}`);
  } catch (error) {
    console.error('Failed to delete image:', error);
    throw error;
  }
}

/**
 * Create Cloud Storage bucket if it doesn't exist
 */
export async function createBucketIfNotExists(
  config: CloudStorageConfig
): Promise<void> {
  const { projectId, bucketName, accessToken, region = 'us-east4' } = config;

  try {
    // Check if bucket exists
    const checkUrl = `https://storage.googleapis.com/storage/v1/b/${bucketName}`;
    const checkResponse = await fetch(checkUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (checkResponse.ok) {
      console.log(`✅ Bucket ${bucketName} already exists`);
      return;
    }

    // Create bucket
    const createUrl = `https://storage.googleapis.com/storage/v1/b?project=${projectId}`;
    const createResponse = await fetch(createUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: bucketName,
        location: region.toUpperCase(),
        storageClass: 'STANDARD',
      }),
    });

    if (!createResponse.ok) {
      const errorBody = await createResponse.text();
      throw new Error(`Failed to create bucket: ${errorBody}`);
    }

    console.log(`✅ Created bucket: ${bucketName}`);
  } catch (error) {
    console.error('Failed to create bucket:', error);
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
 * Download image as file with proper naming
 */
export function downloadImage(metadata: ImageMetadata, base64Image: string): void {
  const link = document.createElement('a');
  link.href = base64Image;
  link.download = metadata.filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Get storage statistics
 */
export async function getStorageStats(config: CloudStorageConfig): Promise<{
  totalImages: number;
  totalSize: number;
  byDate: Record<string, number>;
  byConcept: Record<string, number>;
}> {
  const images = await listImagesFromCloudStorage(config);

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