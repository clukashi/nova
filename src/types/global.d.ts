// src/types/global.d.ts
interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_ENVIRONMENT: 'development' | 'production';
}

interface ImportMeta {
  env: ImportMetaEnv;
}

// Add HTMLElement dataset types
interface HTMLElement {
  dataset: DOMStringMap & {
    category?: string;
    template?: string;
  };
}
