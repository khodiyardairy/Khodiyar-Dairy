<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/509b75b5-11d0-4482-965f-58add5ea597a

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Connecting Vercel KV (Global Grand Opening Ribbon-Cut Limit)

To enforce the global limit of exactly **2 total ribbon cuts** across all visitors:

1. **Create a Vercel KV Database**:
   - Go to your Vercel Dashboard, navigate to the **Storage** tab, and create a **KV** database.
2. **Retrieve API Credentials**:
   - Copy the following credentials from your Vercel KV settings:
     - `KV_REST_API_URL`
     - `KV_REST_API_TOKEN`
3. **Configure Environment Variables**:
   - Add these variables to your environment configuration (e.g. your `.env` or deployment platform secrets):
     ```env
     KV_REST_API_URL="your-vercel-kv-rest-url"
     KV_REST_API_TOKEN="your-vercel-kv-rest-token"
     ```
   - When configured, the backend will atomically track and limit the ribbon cuts globally across all devices! If not configured, the site will gracefully skip the intro ribbon cut and open directly.
