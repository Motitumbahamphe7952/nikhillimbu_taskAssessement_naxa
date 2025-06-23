
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useCategories } from "@/hooks/useCategories";
import { setCategories, selectCategory } from "@/features/categorySlice";
import ProjectGrid from "./ProjectGrid";

const DEFAULT_CAT = "Key Highlights";

const ProjectCategory = () => {
  const dispatch = useAppDispatch();
  const { data: categoriesData, isLoading, error } = useCategories();
  const { titles, selected } = useAppSelector((s) => s.category);

  useEffect(() => {
    if (!categoriesData) return;

    const titles = [DEFAULT_CAT, ...categoriesData.map((c) => c.title)];
    dispatch(setCategories(Array.from(new Set(titles))));

    if (!selected) dispatch(selectCategory(DEFAULT_CAT));
  }, [categoriesData, selected, dispatch]);

  if (isLoading) return <p className="text-center py-8">Loading categories…</p>;
  if (error)     return <p className="text-red-600 text-center py-8">Failed to load categories.</p>;

  return (
    <section className="flex flex-col items-center mt-[-90px] mb-12 px-4 sm:px-6 lg:px-8 w-full">

      <div
        className="
          w-full max-w-6xl bg-white backdrop-blur shadow-[0_28px_70px_-10px_rgba(0,0,0,0.10)]
          flex flex-wrap justify-center gap-4 p-6 z-10
          lg:grid lg:grid-cols-5 lg:auto-rows-min
        "
      >
        {titles.map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch(selectCategory(cat))}
            className={`
              px-4 py-3 text-sm font-medium w-full min-w-[120px]
              transition-all duration-200 ease-in-out
              focus:outline-none 
              ${
                cat === selected
                  ? "bg-yellow-400 text-blue-700 shadow-md font-bold"
                  : "text-gray-800 hover:bg-gray-200 hover:text-blue-600"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>
       <div>
      {selected !== DEFAULT_CAT && (
      <div
        className="
          prose max-w-6xl mx-auto my-20
          text-sm
          font-light
          sm:text-sm
          md:text-lg
          lg:text-lg
          text-center
          md:text-justify
        "
        dangerouslySetInnerHTML={{
          __html:
            categoriesData?.find((c) => c.title === selected)?.description ??
            "",
        }}
      />
      )}


      <div className="w-full mt-8">
        {selected && <ProjectGrid />}
      </div>
      </div> 
    </section>
  );
};

export default ProjectCategory;
