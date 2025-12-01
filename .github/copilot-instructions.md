# Copilot / AI agent instructions — eduTech-Media

This file gives focused, actionable guidance for AI coding agents to be productive in this repository.

Keep it short and concrete. Reference files below when making code changes.

1) Big picture
- Monorepo-like layout (not using a monorepo tool): two main apps:
  - `backend/` — Express + Mongoose API (ES modules, entry `backend/server.js`). Database connect logic lives in `backend/db.js` and reads `process.env.DB`.
  - `client/` — React app built with Vite (entry `client/src/main.jsx`, pages under `client/src/pages/`, page exports in `client/src/Routes.jsx`).

2) How to run locally (common developer workflow)
- Backend: open a terminal, cd to `backend/` then:
  - `npm install` (if needed)
  - Create a `.env` with at least `DB=<mongo-uri>` and optional `PORT`.
  - `npm run dev` (uses nodemon) or `npm start` for production.
- Client: open another terminal, cd to `client/` then:
  - `npm install` (if needed)
  - `npm run dev` to start Vite dev server.

3) Key patterns & conventions
- ES modules everywhere — files use `import` / `export default` so keep that syntax.
- Backend applies CORS in `backend/server.js` (so the client can fetch endpoints during dev).
- DB connection uses `mongoose.connect(process.env.DB)` in `backend/db.js`; ensure environment variables are respected.
- Folder responsibilities:
  - `backend/routes/`, `backend/controller/`, `backend/models/`, `backend/middleware/`, `backend/utils/` follow standard Express layering — look in these folders for related logic.
  - `client/src/pages/` holds page-level components (Login, Signup, Home). `assets/` contains images.

4) Scripts and tools to reference
- `backend/package.json` scripts: `dev` → `nodemon server.js`, `start` → `node server.js`.
- `client/package.json` scripts: `dev` (vite), `build` (vite build), `preview` (vite preview), `lint` (eslint).
- Important dev deps: backend uses `nodemon`, `dotenv`, `mongoose`; client uses `vite`, `eslint`, React and `react-router-dom` v7.

5) Integration & cross-component notes
- Client talks to backend over HTTP; the backend uses CORS. When writing or debugging API changes, run backend on a terminal and observe console logs from `server.js`.
- Because the backend is ES modules and uses `dotenv`, any env changes require restarting the backend process (nodemon handles restart during `npm run dev`).

6) Code change guidance (concrete examples)
- Adding a new API route: create route file under `backend/routes/`, wire it in `backend/server.js` (or the central router), add controllers under `backend/controller/` and models under `backend/models/`.
- Adding a front-end page: add component to `client/src/pages/`, export it from `client/src/Routes.jsx` and add route usage in the client router (check `client/src/main.jsx` or router code for current pattern).
- Use existing CSS/Tailwind classes (Tailwind is included in `client/package.json`).

7) Simple debugging checklist
- Backend: `cd backend && npm run dev` — watch console for `DB connected successfully` or errors printed in `backend/db.js`.
- Client: `cd client && npm run dev` — use browser devtools for network/API errors.
- Typical causes of local failures: missing `.env` DB variable, backend not running, CORS misconfiguration (server.js already calls `app.use(cors())`).

8) Files to inspect first when triaging
- `backend/server.js` — server entry and middleware.
- `backend/db.js` — DB connect and env usage.
- `backend/routes/` and `backend/controller/` — API surface.
- `client/src/Routes.jsx`, `client/src/pages/*` and `client/src/main.jsx` — front-end routing and pages.

If anything here is unclear, tell me which area you'd like expanded (examples, tests, CI, or specific file references) and I'll iterate.
