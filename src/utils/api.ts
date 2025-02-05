// src/utils/api.ts
import type { Template, CVData } from '../types/global';

export class CVClient {
  private baseUrl: string;

  constructor(baseUrl: string = 'https://api.cvnova.com/v1') {
    this.baseUrl = import.meta.env?.VITE_API_URL || baseUrl;
  }

  async getTemplates(): Promise<Template[]> {
    const response = await fetch(`${this.baseUrl}/templates`);
    return this.handleResponse<Template[]>(response);
  }

  // ... rest of the methods
}
