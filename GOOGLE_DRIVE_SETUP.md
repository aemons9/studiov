# Google Drive Storage Setup

## Overview

Your AI Image Studio now supports **TWO storage options**:

1. **Google Drive** (FREE - 15GB included with your Google account) ✅ **RECOMMENDED**
2. **Google Cloud Storage** (Paid - charges apply after free tier)

## Why Use Google Drive?

- ✅ **FREE**: 15GB storage included with every Google account
- ✅ **No Charges**: Unlike Cloud Storage buckets, Drive has no pay-as-you-go fees
- ✅ **Easy Access**: View your images directly in Google Drive
- ✅ **Familiar Interface**: Use Drive's built-in sharing and organization
- ✅ **Same Features**: Gallery, metadata, filtering all work the same way

## How It Works

The system is now configured to use Google Drive by default. When you generate images:

1. Images are uploaded to a folder called **"StudioV Generated Images"** in your Drive
2. Metadata is stored alongside each image for the gallery
3. Images are automatically made publicly viewable (via link only)
4. The gallery displays images from Drive with full filtering and search

## Default Configuration

The App.tsx file is already configured to use Google Drive:

```typescript
const [storageProvider, setStorageProvider] = useState<StorageProvider>('google-drive'); // Default
const [driveFolderName, setDriveFolderName] = useState(DEFAULT_DRIVE_FOLDER); // "StudioV Generated Images"
```

## OAuth Token Requirements

Your existing OAuth2 token needs these Google Drive scopes:

- `https://www.googleapis.com/auth/drive.file` - Create and manage files created by the app
- `https://www.googleapis.com/auth/drive` - Full Drive access (recommended for gallery features)

### Getting a Token with Drive Access

1. Go to [Google OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)
2. Click the gear icon (⚙️) → Check "Use your own OAuth credentials"
3. Enter your OAuth Client ID and Secret
4. In Step 1, select these scopes:
   - ✅ `https://www.googleapis.com/auth/drive`
   - ✅ `https://www.googleapis.com/auth/generativelanguage` (for Imagen)
5. Click "Authorize APIs"
6. In Step 2, click "Exchange authorization code for tokens"
7. Copy the "Access token" and paste it into your app settings

## Switching Between Storage Providers

Currently configured to use Google Drive by default. To switch to Cloud Storage:

In `App.tsx`, change line 96 from:
```typescript
const [storageProvider, setStorageProvider] = useState<StorageProvider>('google-drive');
```

To:
```typescript
const [storageProvider, setStorageProvider] = useState<StorageProvider>('cloud-storage');
```

## Folder Structure in Drive

```
Google Drive
└── StudioV Generated Images/
    ├── concept-name-2025-01-15-143022-123.png
    ├── concept-name-2025-01-15-143022-123.json (metadata)
    ├── another-concept-2025-01-15-143055-456.png
    └── another-concept-2025-01-15-143055-456.json
```

## Gallery Features

All gallery features work with both storage providers:

- ✅ **Thumbnail Grid/List View**: Browse all generated images
- ✅ **Filtering**: By concept, date, intimacy level, aspect ratio
- ✅ **Search**: Find images by filename or concept
- ✅ **Preview**: Click to see full image with metadata
- ✅ **Download**: Save images to your local computer
- ✅ **Delete**: Remove images from storage
- ✅ **Statistics**: View total images, storage size, breakdowns
- ✅ **Load Settings**: Click "Use Settings" to regenerate with same config

## Troubleshooting

### "Failed to upload to Google Drive"

**Cause**: OAuth token doesn't have Drive permissions

**Fix**: Generate a new token with Drive scopes (see "Getting a Token with Drive Access" above)

### "Folder not found"

**Cause**: App can't find or create the folder

**Fix**: The app automatically creates the folder on first upload. Check console for detailed errors.

### Images not showing in gallery

**Cause**: Token expired or insufficient permissions

**Fix**:
1. Regenerate OAuth token (they expire after 1 hour typically)
2. Ensure token has `drive` scope
3. Check browser console for specific error messages

### "CORS error" when loading gallery

**Cause**: Drive API requires authentication

**Fix**: Make sure you're passing the access token correctly. The app uses authenticated requests to avoid CORS.

## Cost Comparison

### Google Drive (FREE)
- **Storage**: 15GB free
- **API Calls**: Free (no charges)
- **Best For**: Personal use, small collections

### Cloud Storage (PAID)
- **Storage**: $0.02 per GB/month
- **Operations**: $0.004 per 10,000 read operations
- **Network**: $0.12 per GB egress
- **Best For**: Enterprise, large-scale production

For a typical user generating 100 images/month:
- **Google Drive**: $0/month ✅
- **Cloud Storage**: ~$1-2/month

## Implementation Details

### Services Created

1. **`services/googleDriveService.ts`**: All Google Drive operations
   - Upload images and metadata
   - List files with metadata
   - Delete files
   - Folder management

2. **`services/storageService.ts`**: Unified interface for both providers
   - Switches between Drive and Cloud Storage
   - Consistent API for all storage operations

3. **Updated `services/geminiService.ts`**:
   - `generateAndSaveImage` now accepts either provider
   - Automatically routes to correct storage service

4. **Updated `components/GalleryModal.tsx`**:
   - Works with both storage providers seamlessly
   - No UI changes needed

## API Endpoints Used

### Google Drive API v3

- `GET /drive/v3/files` - List files and folders
- `POST /drive/v3/files` - Create folders and upload files
- `POST /drive/v3/files/{fileId}/permissions` - Make files public
- `DELETE /drive/v3/files/{fileId}` - Delete files
- `GET /drive/v3/files/{fileId}?alt=media` - Download file content

### Authentication

All requests use Bearer token authentication:
```
Authorization: Bearer {your-oauth-token}
```

## Next Steps

1. ✅ Generate a new OAuth token with Drive scopes
2. ✅ Paste token into your Generation Settings
3. ✅ Generate an image - it will automatically upload to Drive
4. ✅ Open Gallery to see your images
5. ✅ Enjoy free storage! 🎉

## Support

If you encounter any issues:
1. Check browser console for detailed error messages
2. Verify your OAuth token has the correct scopes
3. Ensure token hasn't expired (regenerate if needed)
4. Check that your Google account has available Drive storage

---

**You're all set!** The system is now using Google Drive by default, saving you from Cloud Storage charges while maintaining all the same features. 🚀
