# Cortex AI Deployment Guide

## 1. MongoDB Atlas

Create a MongoDB Atlas cluster, create a database user, allow network access, and copy your connection string.

## 2. Backend on Render

- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`
- Environment variables:

```env
PORT=5000
NODE_ENV=production
MONGO_URI=your_mongodb_atlas_connection_url
JWT_SECRET=replace_with_a_long_random_secret
GEMINI_API_KEY=your_gemini_2_5_flash_key
CLIENT_URL=https://your-frontend-domain.vercel.app
```

After deploy, open:

```text
https://your-backend-url.onrender.com/health
```

## 3. Frontend on Vercel

- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

## 4. Seed production jobs

From Render shell or locally with production `.env`:

```bash
cd backend
npm run seed
```

This only inserts a starter job catalog. Users are created through the live signup page.
