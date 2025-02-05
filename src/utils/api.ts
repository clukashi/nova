// src/utils/api.ts
import type { Template, CVData } from '../types/global';

export class CVClient {
  private baseUrl: string;

  constructor(baseUrl: string = 'https://api.cvnova.com/v1') {
    // Safely access environment variable with fallback
    this.baseUrl = import.meta.env?.VITE_API_URL || baseUrl;
  }

  async getTemplates(): Promise<Template[]> {
    const response = await fetch(`${this.baseUrl}/templates`);
    return this.handleResponse<Template[]>(response);
  }

  async generatePDF(cvData: CVData): Promise<Blob> {
    const response = await fetch(`${this.baseUrl}/generate-pdf`, {
      method: 'POST',
      body: JSON.stringify(cvData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.blob();
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  }
}
