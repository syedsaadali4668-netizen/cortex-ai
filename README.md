# Cortex AI — Production-Ready AI Operating System

Cortex AI is a full-stack SaaS application built with React, Vite, Tailwind, Framer Motion, Node.js, Express, MongoDB, JWT auth, RAG pipelines, and Gemini 2.5 Flash.

## What is included

- Premium animated dark UI
- Landing, auth, dashboard, profile, AI modules, applications, reports, settings
- Signup, login, logout, protected routes
- MongoDB/Mongoose models
- JWT + bcrypt authentication
- Gemini-powered multi-agent AI system
- RAG-style document ingestion, chunking, retrieval, and report saving
- Resume analyzer, career agent, startup builder, research hub, project planner, skill roadmap, cover-letter generator
- Render backend config and Vercel frontend config

## Required environment variables

Backend `.env`:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
MONGO_URI=your_mongodb_atlas_connection_url
JWT_SECRET=replace_with_a_long_random_secret
GEMINI_API_KEY=your_gemini_2_5_flash_key
```

Frontend `.env`:

```env
VITE_API_URL=http://localhost:5000
```

## Local run

```bash
cd backend
npm install
cp .env.example .env
npm run seed
npm run dev
```

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Open `http://localhost:5173`, create a real account from Signup, and use the app.
