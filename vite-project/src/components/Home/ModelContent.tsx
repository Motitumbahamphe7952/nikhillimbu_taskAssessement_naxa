import type { Project } from "@/types/projects";   
interface ModalContentProps {
  project: Project;
}

const ModalContent: React.FC<ModalContentProps> = ({ project }) => {
  const {
    title,
    subtitle,
    clients,
    start_date,
    end_date,
    photo,
    description,
    category_title,
    focus_area,
  } = project;

  const dateRange =
    start_date && end_date ? `${start_date} – ${end_date}` : start_date ?? "—";

  return (
    <div className="p-8 space-y-8">
      {photo && (
        <img
          src={photo}
          alt={title}
          className="w-full h-64 object-cover rounded-md"
        />
      )}

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {subtitle && <p className="text-sm text-gray-700">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-medium">
        <div>
          <span className="block mb-1 text-yellow-600">Client</span>
          {clients ?? "—"}
        </div>
        <div>
          <span className="block mb-1 text-yellow-600">Time&nbsp;Duration</span>
          {dateRange}
        </div>

        {category_title?.length > 0 && (
          <div className="col-span-2">
            <span className="block mb-1 text-yellow-600">Category</span>
            {category_title.join(", ")}
          </div>
        )}

        {Array.isArray(focus_area) && focus_area.length > 0 && (
        <div className="col-span-2">
            <span className="block mb-1 text-yellow-600">Focus Area</span>
            {focus_area.join(", ")}
        </div>
        )}
      </div>

      {description && (
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};

export default ModalContent;
