import NavBar from "@/Layout.tsx/Navbar";
import Hero from "./Hero";
import herobgimage from "@/assets/HerobgImage.svg"; 
import ProjectCategory from "./ProjectCategory";

const Home = () => {
  return (
    <>
    <div className="relative h-fit overflow-hidden bg-gray-100">
      <img
        src={herobgimage}
        alt="Decorative background"
        className="absolute top-0 left-0 pointer-events-none z-0 w-auto h-auto"
        draggable={false}
      />

      <div className="relative ">
        <NavBar />
        <Hero />       
      </div>
    </div>
    <ProjectCategory />
    </>
  );
};

export default Home;
