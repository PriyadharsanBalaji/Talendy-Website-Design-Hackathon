import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSubmissionSchema, 
  insertDownloadRequestSchema, 
  insertCandidateApplicationSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, id: submission.id });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid data" 
      });
    }
  });

  // Download request submission
  app.post("/api/download", async (req, res) => {
    try {
      const validatedData = insertDownloadRequestSchema.parse(req.body);
      const request = await storage.createDownloadRequest(validatedData);
      res.json({ success: true, id: request.id });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid data" 
      });
    }
  });

  // Candidate application submission
  app.post("/api/candidates/apply", async (req, res) => {
    try {
      const validatedData = insertCandidateApplicationSchema.parse(req.body);
      const application = await storage.createCandidateApplication(validatedData);
      res.json({ success: true, id: application.id });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid data" 
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Server error" 
      });
    }
  });

  // Get all download requests (for admin purposes)
  app.get("/api/admin/downloads", async (req, res) => {
    try {
      const requests = await storage.getAllDownloadRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Server error" 
      });
    }
  });

  // Get all candidate applications (for admin purposes)
  app.get("/api/admin/candidates", async (req, res) => {
    try {
      const applications = await storage.getAllCandidateApplications();
      res.json(applications);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
