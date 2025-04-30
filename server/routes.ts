import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create contact submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      const newContact = await storage.createContact({
        ...contactData,
        createdAt: new Date().toISOString(),
      });
      
      return res.status(201).json({
        message: "Contact submission successful",
        contact: newContact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      }
      
      return res.status(500).json({
        message: "Internal server error",
        error: (error as Error).message
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
