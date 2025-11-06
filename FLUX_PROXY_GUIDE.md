# 🚀 Flux API Proxy Server Guide

## Why Do We Need a Proxy?

Replicate API **blocks direct browser requests** due to CORS (Cross-Origin Resource Sharing) security policy. This is a browser security feature that prevents websites from making unauthorized API calls to external services.

**Error without proxy:**
```
Access to fetch at 'https://api.replicate.com/v1/predictions' from origin 'http://localhost:3000'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present
```

**Solution:** Run a local proxy server that forwards your requests to Replicate API.

---

## 🎯 Quick Start

### Option 1: Run Dev Server + Proxy Together (Recommended)

**Single command to run both:**
```bash
npm run dev:all
```

This starts:
- ✅ Vite dev server on http://localhost:3000 (your app)
- ✅ Proxy server on http://localhost:3001 (Replicate API proxy)

### Option 2: Run Separately (Two Terminals)

**Terminal 1 - Proxy Server:**
```bash
npm run proxy
```

**Terminal 2 - Dev Server:**
```bash
npm run dev
```

---

## 📊 How It Works

```
┌──────────────┐         ┌──────────────┐         ┌──────────────────┐
│ Your Browser │  CORS   │ Proxy Server │   ✓     │ Replicate API    │
│ (localhost)  │  Error  │ (localhost)  │  Allowed│ (api.replicate)  │
│   :3000      │   ✗     │   :3001      │         │                  │
└──────────────┘         └──────────────┘         └──────────────────┘
       │                        │                         │
       │  1. Request            │                         │
       │─────────────────────> │                         │
       │                        │  2. Forward Request     │
       │                        │────────────────────────>│
       │                        │                         │
       │                        │  3. Response            │
       │                        │<────────────────────────│
       │  4. Response           │                         │
       │<────────────────────── │                         │
```

**Without Proxy:** Browser → ❌ CORS Error
**With Proxy:** Browser → Proxy → ✅ Success → Replicate API

---

## 🔧 Proxy Endpoints

The proxy server exposes these endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check - verify proxy is running |
| POST | `/api/replicate/predictions` | Create image generation prediction |
| GET | `/api/replicate/predictions/:id` | Poll prediction status |
| GET | `/api/replicate/download?url=...` | Download generated image |

---

## 💡 Usage Example

### 1. Start the Proxy
```bash
npm run proxy
```

**Expected output:**
```
🚀 Replicate API Proxy Server Started
====================================
✅ Running on: http://localhost:3001
✅ CORS enabled for all origins
✅ Ready to proxy Replicate API calls

Endpoints:
  GET  /health                           - Health check
  POST /api/replicate/predictions        - Create prediction
  GET  /api/replicate/predictions/:id    - Poll prediction
  GET  /api/replicate/download?url=...   - Download image
```

### 2. Start Your App
```bash
npm run dev
```

### 3. Use Flux Models
1. Open app: http://localhost:3000
2. Go to **Generation Settings**
3. Select **⚡ Flux Models** provider
4. Enter your Replicate API token
5. Generate images!

**Behind the scenes:**
- Your app calls `http://localhost:3001/api/replicate/predictions`
- Proxy forwards to `https://api.replicate.com/v1/predictions`
- No CORS errors! ✅

---

## 🔑 Setting Up Replicate Token

### 1. Get Your Token
Visit: https://replicate.com/account/api-tokens

### 2. Store in localStorage
Open browser console and paste:
```javascript
localStorage.setItem("replicateToken", "r8_YOUR_TOKEN_HERE");
```

### 3. Refresh the app
Token will auto-load on startup!

---

## 🐛 Troubleshooting

### Error: "Connection refused" or "ECONNREFUSED"
**Problem:** Proxy server isn't running
**Solution:** Run `npm run proxy` in a separate terminal

### Error: "Failed to proxy prediction"
**Problem:** Invalid Replicate token or API issue
**Solution:**
1. Check your token at https://replicate.com/account/api-tokens
2. Verify token in localStorage: `localStorage.getItem("replicateToken")`
3. Check proxy server logs for detailed error

### Proxy server starts but app can't connect
**Problem:** Wrong proxy URL
**Solution:** Proxy should run on port 3001 (default)

Check proxy URL in code:
```typescript
const PROXY_URL = import.meta.env.VITE_PROXY_URL || 'http://localhost:3001';
```

---

## 🚀 Production Deployment

**Important:** This proxy server is for development only!

For production deployment, you need:

### Option 1: Deploy Proxy to Backend
- Deploy proxy-server.js to a Node.js server (Railway, Render, Heroku)
- Update `VITE_PROXY_URL` environment variable
- Example: `VITE_PROXY_URL=https://your-proxy.railway.app`

### Option 2: Serverless Functions
- Convert proxy to serverless functions (Vercel, Netlify)
- Use edge functions to handle API calls

### Option 3: Use Replicate SDK (if available)
- Check if Replicate provides a browser-compatible SDK
- Some services provide CORS-friendly endpoints

---

## 📝 Technical Details

**Proxy Server:**
- **Framework:** Express.js 5.x
- **CORS:** Enabled for all origins (dev mode)
- **Port:** 3001
- **Features:**
  - Request forwarding
  - Token passthrough
  - Image download proxy
  - Error handling
  - Logging

**Security Notes:**
- Token passed in request body (not logged)
- CORS enabled for localhost only (restrict in production)
- No token storage on proxy
- All requests proxied directly

---

## ✅ Verification

Test your proxy server:

```bash
# Terminal 1
npm run proxy

# Terminal 2
curl http://localhost:3001/health
```

**Expected response:**
```json
{"status":"ok","service":"replicate-proxy"}
```

---

## 🎉 Ready to Use!

Your Flux integration is now CORS-error-free!

**Quick checklist:**
- ✅ Proxy server running (npm run proxy)
- ✅ Dev server running (npm run dev)
- ✅ Replicate token set in localStorage
- ✅ Flux provider selected in UI
- ✅ Generate beautiful images! 🎨

---

## 📚 Additional Resources

- Replicate API Docs: https://replicate.com/docs
- Flux Models: https://replicate.com/collections/flux
- CORS Explained: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

**Need help?** Check console logs in both browser and proxy server terminal.
