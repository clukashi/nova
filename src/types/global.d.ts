// src/types/global.d.ts
interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_ENVIRONMENT: 'development' | 'production';
}

interface ImportMeta {
  env: ImportMetaEnv;
}

interface Template {
  id: string;
  name: string;
  category: 'tech' | 'creative' | 'executive';
  optimized: boolean;
  thumbnail: string;
}

interface AISuggestion {
  id: string;
  message: string;
  category: 'wording' | 'metrics' | 'formatting';
  confidence: number;
  accepted: boolean;
}

interface CVData {
  sections: Section[];
  style: CVStyle;
  metadata: CVMetadata;
}

// Extend HTMLElement for dataset typing
interface HTMLElement {
  dataset: DOMStringMap & {
    category?: string;
    template?: string;
  };
}
