// Load environment variables at the earliest stage
import 'dotenv/config';

import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Server static assets first (for both dev and prod)
  app.use(express.static(path.resolve(import.meta.dirname, "..", "client", "public")));
  
  // In production, also serve from the built files
  if (app.get("env") === "production") {
    app.use(express.static(path.resolve(import.meta.dirname, "..", "dist", "public")));
  }

  // Setup API error handler before the catch-all route
  app.use("/api/*", (err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    log(`Error in API: ${err.message}`);
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  
  // Global catch-all route for client-side routing (SPA fallback)
  // This should be the last route
  app.get("*", (req, res) => {
    if (app.get("env") === "development") {
      // In development, the setupVite middleware should handle this
      res.status(404).send("Page not found - Check Vite configuration");
    } else {
      // In production, serve the index.html
      res.sendFile(path.resolve(import.meta.dirname, "..", "dist", "public", "index.html"));
    }
  });

  // Serve the app on port 3000
  // this serves both the API and the client.
  // Using port 3000 for development environment.
  const port = 3000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  });
  
  log(`serving on port ${port}`);
})();
