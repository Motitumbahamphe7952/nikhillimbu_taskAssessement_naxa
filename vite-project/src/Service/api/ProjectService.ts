import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category_title: string; 
  category_description: string[];
  photo: string;
  clients: string;
  start_date: string;
  end_date: string;
  description: string;
  is_key_highlight: boolean;
  project_order: number | null;
  created_at: string;
  updated_at: string;
  ongoing: boolean;
  project_url: string | null;
  is_international_projects: boolean;
  category: number[];
  focus_area: any[]; 
}

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Projects'],
  endpoints: (builder) => ({
    
    getProjects: builder.query<Project[], void>({
      query: () => 'https://admin.naxa.com.np/api/projects',
      providesTags: ['Projects'],
      transformResponse: (response: any[]): Project[] =>
        response.map((project) => ({
          ...project,
          category_title: project.category_title?.join(', ') || '',
        })),
    }),

    getProjectsByCategory: builder.query<Project[], string>({
      query: (categoryTitle: string) => ({
        url: '/projects',
        params: { category_title: categoryTitle },
        method: 'GET',
      }),
      providesTags: (_result, _error, categoryTitle) => [
        { type: 'Projects', id: `CATEGORY-${categoryTitle}` },
      ],
      transformResponse: (response: any[]): Project[] =>
        response.map((project) => ({
          ...project,
          category_title: project.category_title?.join(', ') || '',
        })),
    }),

    getProjectById: builder.query<Project, number>({
      query: (id: number) => ({
        url: `/projects/${id}`,
        method: 'GET',
      }),
      providesTags: (_result, _error, id) => [{ type: 'Projects', id }],
      transformResponse: (project: any): Project => ({
        ...project,
        category_title: project.category_title?.join(', ') || '',
      }),
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectsByCategoryQuery,
  useGetProjectByIdQuery,
} = projectsApi;
