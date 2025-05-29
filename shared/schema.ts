import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  companyName: text("company_name").notNull(),
  email: text("email").notNull(),
  name: text("name").notNull(),
  department: text("department"),
  serviceInterest: text("service_interest"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const downloadRequests = pgTable("download_requests", {
  id: serial("id").primaryKey(),
  companyName: text("company_name").notNull(),
  email: text("email").notNull(),
  department: text("department"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const candidateApplications = pgTable("candidate_applications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  skills: text("skills"),
  experience: text("experience"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export const insertDownloadRequestSchema = createInsertSchema(downloadRequests).omit({
  id: true,
  createdAt: true,
});

export const insertCandidateApplicationSchema = createInsertSchema(candidateApplications).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type DownloadRequest = typeof downloadRequests.$inferSelect;
export type InsertDownloadRequest = z.infer<typeof insertDownloadRequestSchema>;
export type CandidateApplication = typeof candidateApplications.$inferSelect;
export type InsertCandidateApplication = z.infer<typeof insertCandidateApplicationSchema>;
