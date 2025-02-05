// src/components/TemplateGallery.ts
export class TemplateGallery {
  private filters: NodeListOf<HTMLButtonElement>;
  private grid: HTMLDivElement;

  constructor() {
    this.filters = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
    this.grid = document.querySelector<HTMLDivElement>('.template-grid')!;
    this.init();
  }

  private async init(): Promise<void> {
    this.addFilterListeners();
    await this.loadTemplates();
  }

  private async loadTemplates(): Promise<void> {
    try {
      const response = await fetch('/api/templates');
      const templates: Template[] = await response.json();
      this.renderTemplates(templates);
    } catch (error) {
      console.error('Error loading templates:', error);
    }
  }

  private renderTemplates(templates: Template[]): void {
    this.grid.innerHTML = templates
      .map(
        (template) => `
        <div class="template-card" data-category="${template.category}">
          <div class="preview-header">
            <span class="badge">${template.optimized ? 'ATS Optimized' : ''}</span>
            <button class="preview-btn" data-template="${template.id}">
              👁️ Preview
            </button>
          </div>
          <img src="${template.thumbnail}" alt="${template.name}">
          <h3>${template.name}</h3>
        </div>
      `
      )
      .join('');
  }

  private addFilterListeners(): void {
    this.filters.forEach((btn) => {
      btn.addEventListener('click', () => this.handleFilter(btn));
    });
  }

  private handleFilter(btn: HTMLButtonElement): void {
    this.filters.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter as string;

    document.querySelectorAll<HTMLElement>('.template-card').forEach((card) => {
      const category = card.dataset.category;
      card.style.display = filter === 'all' || category === filter ? 'block' : 'none';
    });
  }
}
