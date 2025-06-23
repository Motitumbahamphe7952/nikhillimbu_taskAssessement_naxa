
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/useRedux";
import { useProjects }     from "@/hooks/useProjects";
import type { Project }    from "@/types/projects";
import ModalContent        from "./ModelContent";

interface CardProps {
  project : Project;
  rowMode : boolean;          
}

const Card: React.FC<CardProps> = ({ project, rowMode }) => (
  <article
    className={`
    transform-gpu transition-all duration-400 ease-in-out       /* 👈 animation */
    group-hover:-translate-y-6                               /* 👈 lift on hover */
    ${rowMode
      ? "flex flex-col md:flex-row bg-gray-100 shadow-lg overflow-hidden"
      : "flex flex-col bg-gray-100 shadow-lg overflow-hidden w-full mt-20 md:w-[660px] h-auto md:h-[730px]"}
  `}
  >
    {project.photo && (
      <div
        className={
          rowMode
            ? "w-full md:w-1/3 h-48 md:h-auto"
            : "h-[260px] md:h-[400px]"
        }
      >
        <img
          src={project.photo}
          alt={project.title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
    )}

    <div
      className={
        rowMode
          ? "flex-1 p-6 space-y-4"
          : "flex-1 p-6 space-y-4 bg-blue-800 text-white"
      }
    >
      <h3 className={rowMode ? "text-xl font-semibold" : "text-lg font-semibold"}>
        {project.title}
      </h3>

      {project.subtitle && (
        <p className={rowMode ? "text-sm text-gray-700" : "text-sm opacity-85"}>
          {project.subtitle}
        </p>
      )}

      <div
        className={
          rowMode
            ? "grid grid-cols-2 gap-6 text-xs font-medium pt-4"
            : "grid grid-rows-2 gap-8 text-xs font-medium"
        }
      >
        <div>
          <span className={rowMode ? "text-yellow-600 block mb-1" : "text-yellow-400 block mb-1"}>
            Client
          </span>
          {project.clients ?? "—"}
        </div>
        <div>
          <span className={rowMode ? "text-yellow-600 block mb-1" : "text-yellow-400 block mb-1"}>
            Project&nbsp;Period
          </span>
          {project.start_date ?? "—"}
        </div>
      </div>
    </div>
  </article>
);

const ProjectGrid: React.FC = () => {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpenProject(null);
    if (openProject) window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [openProject]);

  /* data */
  const selectedCategory = useAppSelector((s) => s.category.selected);
  const { data: raw = [], isLoading, error } = useProjects();

  const projects: Project[] = Array.isArray(raw) ? raw : (raw as any)?.results ?? [];
  const visible = (
  selectedCategory === "Key Highlights"
    ? projects.filter((p) => p.is_key_highlight)
    : projects.filter((p) => p.category_title.includes(selectedCategory))
    ).sort((a, b) => {

        const oa = a.project_order ?? Number.POSITIVE_INFINITY;
    const ob = b.project_order ?? Number.POSITIVE_INFINITY;

    return oa === ob ? a.id - b.id : oa - ob;  
    });

  if (isLoading)  return <p className="text-center py-10">Loading…</p>;
  if (error)      return <p className="text-center py-10 text-red-600">Failed to load projects.</p>;
  if (!visible.length)
    return <p className="text-center py-10 opacity-60">No projects in this category.</p>;

  const rowMode = selectedCategory !== "Key Highlights";

  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 mt-20">
     <div
      className={
        rowMode
          ? "flex flex-col gap-12 max-w-[1440px] mx-auto"           
          : "flex flex-wrap justify-center gap-x-20 gap-y-12 md:max-w-[1380px] lg:max-w-[1440px] mx-auto "
      }
    >
      {visible.map((p) => (
        <button
          key={p.id}
           className={`
            group                      
            ${rowMode
                ? "text-left"
                : "mt-10 flex-[1_1_100%] md:flex-[0_0_46%] max-w-full md:max-w-[640px] text-left"}
            `}
          onClick={() => setOpenProject(p)}
        >
          <Card project={p} rowMode={rowMode} />
        </button>
      ))}
    </div>

      {openProject && (
        <div className="fixed inset-0 z-50">
          <div
            onClick={() => setOpenProject(null)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
          />

          <div className="relative mx-auto my-10 w-[95%] lg:w-[80%] xl:w-[70%] max-h-[90vh] overflow-y-auto rounded-md bg-white shadow-xl animate-scale-in">
            <ModalContent project={openProject} />
          </div>

          <button
            onClick={() => setOpenProject(null)}
            className="absolute right-4 top-4 text-3xl font-semibold text-gray-600 hover:text-gray-900 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50/30 transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectGrid;


