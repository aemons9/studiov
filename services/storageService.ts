/**
 * UNIFIED STORAGE SERVICE
 *
 * Provides a unified interface for both Google Cloud Storage and Google Drive
 * User can choose their preferred storage provider to avoid charges
 */

import type {
  ImageMetadata,
  CloudStorageConfig,
  GoogleDriveConfig,
  StorageProvider,
  PromptData,
  GenerationSettings,
} from '../types';

import {
  uploadImageToCloudStorage,
  listImagesFromCloudStorage,
  deleteImageFromCloudStorage,
  getStorageStats as getCloudStorageStats,
  createBucketIfNotExists,
} from './cloudStorageService';

import {
  uploadImageToGoogleDrive,
  listImagesFromGoogleDrive,
  deleteImageFromGoogleDrive,
  getGoogleDriveStats,
} from './googleDriveService';

export interface UnifiedStorageConfig {
  provider: StorageProvider;
  cloudStorage?: CloudStorageConfig;
  googleDrive?: GoogleDriveConfig;
}

/**
 * Upload image to the selected storage provider
 */
export async function uploadImage(
  base64Image: string,
  promptData: PromptData,
  settings: GenerationSettings,
  conceptName: string,
  config: UnifiedStorageConfig
): Promise<ImageMetadata> {
  switch (config.provider) {
    case 'cloud-storage':
      if (!config.cloudStorage) {
        throw new Error('Cloud Storage configuration is required');
      }
      // Ensure bucket exists
      await createBucketIfNotExists(config.cloudStorage);
      return uploadImageToCloudStorage(
        base64Image,
        promptData,
        settings,
        conceptName,
        config.cloudStorage
      );

    case 'google-drive':
      if (!config.googleDrive) {
        throw new Error('Google Drive configuration is required');
      }
      return uploadImageToGoogleDrive(
        base64Image,
        promptData,
        settings,
        conceptName,
        config.googleDrive
      );

    default:
      throw new Error(`Unsupported storage provider: ${config.provider}`);
  }
}

/**
 * List all images from the selected storage provider
 */
export async function listImages(config: UnifiedStorageConfig): Promise<ImageMetadata[]> {
  switch (config.provider) {
    case 'cloud-storage':
      if (!config.cloudStorage) {
        throw new Error('Cloud Storage configuration is required');
      }
      return listImagesFromCloudStorage(config.cloudStorage);

    case 'google-drive':
      if (!config.googleDrive) {
        throw new Error('Google Drive configuration is required');
      }
      return listImagesFromGoogleDrive(config.googleDrive);

    default:
      throw new Error(`Unsupported storage provider: ${config.provider}`);
  }
}

/**
 * Delete image from the selected storage provider
 */
export async function deleteImage(
  metadata: ImageMetadata,
  config: UnifiedStorageConfig
): Promise<void> {
  switch (config.provider) {
    case 'cloud-storage':
      if (!config.cloudStorage) {
        throw new Error('Cloud Storage configuration is required');
      }
      return deleteImageFromCloudStorage(metadata, config.cloudStorage);

    case 'google-drive':
      if (!config.googleDrive) {
        throw new Error('Google Drive configuration is required');
      }
      return deleteImageFromGoogleDrive(metadata, config.googleDrive);

    default:
      throw new Error(`Unsupported storage provider: ${config.provider}`);
  }
}

/**
 * Get storage statistics from the selected provider
 */
export async function getStats(config: UnifiedStorageConfig): Promise<{
  totalImages: number;
  totalSize: number;
  byDate: Record<string, number>;
  byConcept: Record<string, number>;
}> {
  switch (config.provider) {
    case 'cloud-storage':
      if (!config.cloudStorage) {
        throw new Error('Cloud Storage configuration is required');
      }
      return getCloudStorageStats(config.cloudStorage);

    case 'google-drive':
      if (!config.googleDrive) {
        throw new Error('Google Drive configuration is required');
      }
      return getGoogleDriveStats(config.googleDrive);

    default:
      throw new Error(`Unsupported storage provider: ${config.provider}`);
  }
}
