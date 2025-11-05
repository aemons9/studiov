# Using Your Personal 2TB Drive with Work Cloud Account

## Your Setup

- **Work Account**: avishekb@aemons.com (30GB Drive)
  - Owns the `creatives-476816` Cloud project
  - Used for Imagen API calls

- **Personal Account**: aemonbbsr@gmail.com (2TB Drive - AI Pro)
  - Has much more storage
  - You want to use this for storing generated images

## Solution: Use Two OAuth Tokens

The app now supports using **separate tokens** for API calls and Drive storage!

### How It Works

1. **Main Token** (avishekb@aemons.com): Used for Imagen API calls
2. **Drive Token** (aemonbbsr@gmail.com): Used ONLY for Google Drive storage

### Setup Steps

#### Step 1: Generate Work Account Token (for Imagen)

1. Go to [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)
2. Sign in with `avishekb@aemons.com`
3. Click gear icon → Use your own OAuth credentials
4. Select these scopes:
   - ✅ `https://www.googleapis.com/auth/generativelanguage`
   - ✅ `https://www.googleapis.com/auth/cloud-platform`
5. Authorize and get token
6. **Save this as your main "Access Token"**

#### Step 2: Generate Personal Account Token (for Drive)

1. Open a new incognito/private window
2. Go to [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/) again
3. Sign in with `aemonbbsr@gmail.com` (your personal 2TB account)
4. Click gear icon → Use your own OAuth credentials (same client ID)
5. Select ONLY this scope:
   - ✅ `https://www.googleapis.com/auth/drive`
6. Authorize and get token
7. **Save this as your "Drive Access Token"**

#### Step 3: Configure the App

In your Generation Settings UI (or code), you'll now have:

```typescript
{
  projectId: 'creatives-476816',
  accessToken: '<work-account-token>',       // For Imagen API
  driveAccessToken: '<personal-token>',      // For Google Drive (NEW!)
  // ... other settings
}
```

### Where Images Will Be Stored

With this setup:
- ✅ Images generated using `creatives-476816` project (billed to work account)
- ✅ Images stored in `aemonbbsr@gmail.com` Drive (uses your 2TB!)
- ✅ Folder created: **"StudioV Generated Images"** in personal Drive

### Manual Configuration

Since we haven't added a UI field for `driveAccessToken` yet, you can set it manually:

**Option A: Set in Browser Console (Temporary)**

1. Generate your images
2. Open browser console (F12)
3. Before generating, run:
```javascript
// This sets the Drive token for this session
// Copy this into console before clicking Generate
localStorage.setItem('driveToken', 'YOUR_PERSONAL_DRIVE_TOKEN_HERE');
```

**Option B: Edit Generation Settings State (Persistent)**

In `App.tsx`, add an initialization after line 92:

```typescript
const [generationSettings, setGenerationSettings] = useState<GenerationSettings>({
  projectId: '',
  accessToken: '',
  driveAccessToken: '', // Add your personal Drive token here permanently
  numberOfImages: 1,
  // ... rest of settings
});
```

**Option C: Load from localStorage (Recommended)**

Add this useEffect in App.tsx after the state declarations:

```typescript
useEffect(() => {
  const storedDriveToken = localStorage.getItem('driveToken');
  if (storedDriveToken) {
    setGenerationSettings(prev => ({
      ...prev,
      driveAccessToken: storedDriveToken
    }));
  }
}, []);
```

Then set it once in console:
```javascript
localStorage.setItem('driveToken', 'YOUR_PERSONAL_DRIVE_TOKEN');
```

### Verifying It Works

1. Generate an image
2. Check browser console - you should see:
   ```
   ✅ Uploaded image 1/1 to Google Drive
   ```
3. Open Google Drive as `aemonbbsr@gmail.com`
4. Look for folder "StudioV Generated Images"
5. Your image should be there! 🎉

### Gallery Access

To view your gallery:
1. Click the Gallery button
2. Gallery will load images from your personal Drive
3. All filtering, search, and preview features work normally

### Token Management

**Both tokens expire after 1 hour by default**

When a token expires:
- **Imagen token expired**: Image generation will fail
- **Drive token expired**: Images generate but won't upload

**Quick refresh**:
```javascript
// Update both tokens in one go
localStorage.setItem('mainToken', 'NEW_WORK_TOKEN');
localStorage.setItem('driveToken', 'NEW_PERSONAL_TOKEN');
// Reload page
```

### Alternative: Single Account (Simpler)

If you don't want to manage two tokens, you can:

1. Grant your personal account (aemonbbsr@gmail.com) access to the Cloud project
2. Use only your personal account for everything
3. Benefits: Single token, simpler management
4. Same storage destination (your 2TB Drive)

**To do this:**
1. Google Cloud Console → `creatives-476816` → IAM & Admin
2. Add Member: `aemonbbsr@gmail.com`
3. Role: "Vertex AI User" + "Service Usage Consumer"
4. Generate single OAuth token from personal account with both scopes
5. Use that token for both `accessToken` and `driveAccessToken` (or leave driveAccessToken empty)

### Cost Implications

- **Imagen API**: Billed to `creatives-476816` project (work account) regardless of which Drive you use
- **Drive Storage**: Uses your personal 2TB (no cost, included with AI Pro)
- **Result**: API usage on work billing, storage on personal free allocation ✅

### Security Note

Both accounts need access to:
- Work account: Cloud Project API access
- Personal account: Just your own Drive

This is secure because:
- Personal token can only access personal Drive
- Work token can't access personal Drive
- Images are isolated to personal account's folder

---

## Summary

With two tokens:
1. ✅ Generate images using work Cloud project
2. ✅ Store in personal 2TB Drive
3. ✅ Save on storage costs
4. ✅ Keep work and personal data separate

You're now set up to use your 2TB storage! 🚀
