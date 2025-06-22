import axios          from "axios";
import { useQuery }   from "@tanstack/react-query";
import type { ProjectResponse } from "@/types/projects";

export interface CategoryChip {
  title: string;       
  description: string; 
}

const fetchCategories = async (): Promise<CategoryChip[]> => {
  const { data } = await axios.get<ProjectResponse[]>(
    "https://admin.naxa.com.np/api/projects"
  );

  const map = new Map<string, string>();

  data.forEach((p) => {
    p.category_title.forEach((t, idx) => {
      if (
        !map.has(t) &&
        Array.isArray(p.category_description) &&
        p.category_description[idx]
      ) {
        map.set(t, p.category_description[idx]);
      }
    });
  });

  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([title, description]) => ({ title, description }));
};

export const useCategories = () =>
  useQuery<CategoryChip[], Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1_000, 
  });
