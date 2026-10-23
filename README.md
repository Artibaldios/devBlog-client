# Arti Dev Blog frontend

React and Vite frontend for the Arti Dev Blog. It communicates with the Express API, uses Clerk for authentication, and ImageKit for image delivery and uploads.

## Quick start

```bash
npm install
```

Create `.env` with your local values:

```env
VITE_API_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=pk_test_replace_me
VITE_IK_URL_ENDPOINT=https://ik.imagekit.io/your-imagekit-id
VITE_IK_PUBLIC_KEY=public_replace_me
```

Then start the app:

```bash
npm run dev
```

## Commands

```bash
npm run dev     # Start the Vite development server
npm run lint    # Check source files with ESLint
npm run build   # Create a production build
npm run preview # Preview the production build locally
```

## Deployment

Set `VITE_API_URL` to the deployed API URL, for example `https://arti-blog-api-server.up.railway.app`. Vite variables are compiled into the client bundle, so redeploy the frontend after changing them.

Only publishable values belong in `VITE_*` variables. Do not put Supabase secret keys, ImageKit private keys, or Clerk webhook secrets in this project.