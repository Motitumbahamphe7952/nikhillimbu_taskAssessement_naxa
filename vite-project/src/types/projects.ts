// src/types/project.ts
export interface ProjectResponse {
  id: number;
  category_title: string[];
  is_key_highlight: boolean;
  category_description?: string[];
}

export interface CategoryState {
  categories: string[];
  selectedCategory: string | null;
}


export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  clients?: string;
  photo?: string;

  start_date?: string;
  project_order?: number | null; 
  end_date?: string;
  category_description?: string;
  description?: string;
  focus_area?: string[];
  category_title: string[];
  is_key_highlight?: boolean;
}