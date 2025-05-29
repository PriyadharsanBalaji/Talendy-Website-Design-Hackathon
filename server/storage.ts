import { 
  users, 
  contactSubmissions, 
  downloadRequests, 
  candidateApplications,
  type User, 
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type DownloadRequest,
  type InsertDownloadRequest,
  type CandidateApplication,
  type InsertCandidateApplication
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  createDownloadRequest(request: InsertDownloadRequest): Promise<DownloadRequest>;
  createCandidateApplication(application: InsertCandidateApplication): Promise<CandidateApplication>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  getAllDownloadRequests(): Promise<DownloadRequest[]>;
  getAllCandidateApplications(): Promise<CandidateApplication[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private downloadRequests: Map<number, DownloadRequest>;
  private candidateApplications: Map<number, CandidateApplication>;
  private currentUserId: number;
  private currentContactId: number;
  private currentDownloadId: number;
  private currentCandidateId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.downloadRequests = new Map();
    this.candidateApplications = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentDownloadId = 1;
    this.currentCandidateId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const contactSubmission: ContactSubmission = { 
      ...submission, 
      id, 
      createdAt: new Date() 
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async createDownloadRequest(request: InsertDownloadRequest): Promise<DownloadRequest> {
    const id = this.currentDownloadId++;
    const downloadRequest: DownloadRequest = { 
      ...request, 
      id, 
      createdAt: new Date() 
    };
    this.downloadRequests.set(id, downloadRequest);
    return downloadRequest;
  }

  async createCandidateApplication(application: InsertCandidateApplication): Promise<CandidateApplication> {
    const id = this.currentCandidateId++;
    const candidateApplication: CandidateApplication = { 
      ...application, 
      id, 
      createdAt: new Date() 
    };
    this.candidateApplications.set(id, candidateApplication);
    return candidateApplication;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async getAllDownloadRequests(): Promise<DownloadRequest[]> {
    return Array.from(this.downloadRequests.values());
  }

  async getAllCandidateApplications(): Promise<CandidateApplication[]> {
    return Array.from(this.candidateApplications.values());
  }
}

export const storage = new MemStorage();
