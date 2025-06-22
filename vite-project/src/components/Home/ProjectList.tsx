import { useGetProjectsQuery } from '../../Service/api/ProjectService.ts';


const ProjectList = () => {
  const { data: projects, isLoading, error } = useGetProjectsQuery();

  if (isLoading) return <p>Loading projects...</p>;
  if (error) return <p>Failed to load projects.</p>;

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects?.map((project) => (
        <div key={project.id} className="border p-4 shadow-md rounded-md">
          <img src={project.photo} alt={project.title} className="w-full h-48 object-cover mb-2 rounded" />
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.subtitle}</p>

          
          <p className="text-xs mt-1 text-blue-600">
            <strong>Category:</strong> {project.category_title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
