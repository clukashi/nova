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

// Add other type definitions as needed
