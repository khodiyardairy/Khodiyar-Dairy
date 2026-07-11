import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { kv } from "@vercel/kv";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory fallback if Vercel KV is not configured
  let memoryCutsUsed = 0;

  // API Route: grand-opening-status
  app.get("/api/grand-opening-status", async (req, res) => {
    try {
      let cutsUsed = 0;
      
      if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
        // Fall back to the in-memory counter if KV is not configured, so the ribbon shows in dev/preview
        cutsUsed = memoryCutsUsed;
      } else {
        const kvCuts = await kv.get<number>("grand_opening_cuts");
        cutsUsed = kvCuts !== null && kvCuts !== undefined ? kvCuts : 0;
      }
      
      // Ensure cutsUsed is bounded properly
      const normalizedCuts = Math.min(2, Math.max(0, cutsUsed));
      const cutsRemaining = 2 - normalizedCuts;
      const isOpen = normalizedCuts >= 2;

      return res.json({ cutsUsed: normalizedCuts, cutsRemaining, isOpen });
    } catch (error) {
      console.error("Error getting grand opening status:", error);
      // Fallback: If anything fails, use the memory counter as a safe backup
      const normalizedCuts = Math.min(2, Math.max(0, memoryCutsUsed));
      return res.json({ cutsUsed: normalizedCuts, cutsRemaining: 2 - normalizedCuts, isOpen: normalizedCuts >= 2 });
    }
  });

  // API Route: cut-ribbon
  app.post("/api/cut-ribbon", async (req, res) => {
    try {
      if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
        // Fall back to in-memory counter
        if (memoryCutsUsed < 2) {
          memoryCutsUsed++;
          return res.json({ success: true, cutsUsed: memoryCutsUsed, cutsRemaining: 2 - memoryCutsUsed });
        } else {
          return res.json({ success: false, reason: "already_opened" });
        }
      }

      // Atomically increment the cuts counter in Vercel KV
      const count = await kv.incr("grand_opening_cuts");

      if (count <= 2) {
        const cutsRemaining = 2 - count;
        return res.json({ success: true, cutsUsed: count, cutsRemaining });
      } else {
        // If it exceeded 2, atomically decrement it back so we don't leak count
        await kv.decr("grand_opening_cuts");
        return res.json({ success: false, reason: "already_opened" });
      }
    } catch (error) {
      console.error("Error performing atomic cut ribbon action:", error);
      // If Vercel KV fails, gracefully fall back to the in-memory counter so the app continues to work
      if (memoryCutsUsed < 2) {
        memoryCutsUsed++;
        return res.json({ success: true, cutsUsed: memoryCutsUsed, cutsRemaining: 2 - memoryCutsUsed });
      }
      return res.status(500).json({ success: false, reason: "database_error" });
    }
  });

  // API Route: reset-grand-opening (allows reset for easy preview/testing)
  app.all("/api/reset-grand-opening", async (req, res) => {
    try {
      if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
        await kv.set("grand_opening_cuts", 0);
      }
      memoryCutsUsed = 0;
      return res.json({ success: true, message: "Grand opening ribbon cuts reset successfully" });
    } catch (error) {
      console.error("Error resetting grand opening cuts:", error);
      return res.status(500).json({ success: false, error: "Reset failed" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
