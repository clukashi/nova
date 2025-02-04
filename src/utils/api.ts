export class CVClient {
  private baseUrl: string;

  constructor(baseUrl: string = import.meta.env.VITE_API_URL) {
    this.baseUrl = baseUrl;
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
        'Content-Type': 'application/json'
      }
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
