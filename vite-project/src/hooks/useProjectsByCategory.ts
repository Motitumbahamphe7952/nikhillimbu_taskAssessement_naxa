// // hooks/useProjectsByCategory.ts
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import { useAppSelector } from "@/hooks/useRedux";
// import type { ProjectResponse } from "@/types/projects";

// export const useProjectsByCategory = () => {
//   const category = useAppSelector((s) => s.category.selectedCategory);

//   return useQuery<ProjectResponse[]>({
//     queryKey: ["projects", category],
//     queryFn: async () => {
//       const { data } = await axios.get<ProjectResponse[]>(
//         "https://admin.naxa.com.np/api/projects"
//       );

//       if (category === "Key Highlights") {
//         return data.filter((p) => p.is_key_highlight);
//       }
//       return data.filter((p) =>
//         p.category_title.map((c) => c.toLowerCase()).includes(category.toLowerCase())
//       );
//     },
//     enabled: !!category, // wait until Redux slice initialised
//   });
// };


// hooks/useProjectsByCategory.ts
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "@/hooks/useRedux";
import type { ProjectResponse } from "@/types/projects";

export const useProjectsByCategory = () => {
  const category = useAppSelector((s) => s.category.selected);

  return useQuery<ProjectResponse[]>({
    queryKey: ["projects", category],
    queryFn: async ({ queryKey }) => {
      try {
        const [, currentCategory] = queryKey;
        const { data } = await axios.get<ProjectResponse[]>(
          `https://admin.naxa.com.np/api/projects`,
          currentCategory && currentCategory !== "All Projects" ? {
            params: {
              category: typeof currentCategory === "string" ? currentCategory.toLowerCase() : undefined,
              is_key_highlight: currentCategory === "Key Highlights" ? true : undefined
            }
          } : {}
        );
        
        return data;
      } catch (error) {
        console.warn("Server-side filtering failed, falling back to client-side");
        const { data } = await axios.get<ProjectResponse[]>(
          "https://admin.naxa.com.np/api/projects"
        );
        
        if (!category) return [];
        if (category === "Key Highlights") {
          return data.filter((p) => p.is_key_highlight);
        }
        return data.filter((p) =>
          p.category_title
            .map((c) => c.toLowerCase())
            .includes(category.toLowerCase())
        );
      }
    },
    enabled: !!category,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    select: (data) => {
      return data.map(project => ({
        ...project,
      }));
    }
  });
};