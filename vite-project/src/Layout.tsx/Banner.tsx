import { ArrowRight } from 'lucide-react';
import React from "react";
import { NavLink } from 'react-router-dom';

interface BannerProps {
  bannerNote?: string;
}

const Banner: React.FC<BannerProps> = ({
  bannerNote = "Check out our pioneering GEO AI products for intelligent geospatial solutions!",
}) => {
  return (
    <div className="group text-center text-xs xs:text-xs sm:text-xs md:text-sm bg-yellow-300 hover:text-[#0B5BF5] py-2 my-0 pr-2 font-semibold underline transition-colors duration-200 ease-in-out">
      <NavLink to="https://geoai.naxa.com.np/" className="flex items-center justify-center">
      <span className="transform translate-x-0 group-hover:-translate-x-1 duration-200 ease-in-out">{bannerNote}</span>
      <ArrowRight
        className="inline h-4 w-4 text-[#0B5BF5] transform opacity-0 translate-x-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-200 ease-in-out"
      />
      </NavLink>  
    </div>
  );
};

export default Banner;