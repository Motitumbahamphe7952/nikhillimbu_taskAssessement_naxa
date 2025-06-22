// src/hooks/useProjects.ts
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { Project }   from "@/types/projects";   

interface ApiEnvelope {
  results: Project[];          
}

export const useProjects = () =>
  useQuery<Project[], Error>({
    queryKey: ["projects"],
    queryFn: async () => {
      /* 1 ◾ fetch */
      const { data } = await axios.get<ApiEnvelope>("https://admin.naxa.com.np/api/projects");

      if (Array.isArray(data)) return data;            
      if (Array.isArray((data as any).results)) return (data as any).results;

      return [];                                     
    },
    staleTime: 5 * 60 * 1000, 
  });
