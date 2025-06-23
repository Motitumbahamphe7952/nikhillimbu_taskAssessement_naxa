import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, ArrowRight, X, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

import DropdownMenu from "@/components/Home/DropDownMenu";
import type { DropdownItem, DropdownName } from "@/components/Home/DropDownMenu";
import logo from "@/assets/logo.png";
import AboutUsIcon from "@/assets/AboutUs.svg";
import TeamIcon from "@/assets/Team.svg";
import WorkWithUsIcon from "@/assets/WorkWithUs.png";
import AwardsIcon from "@/assets/Awards&Achievements.svg";
import EventsIcon from "@/assets/Events.svg";
import MediaIcon from "@/assets/Media.svg";
import PublicationsIcon from "@/assets/Publications.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownName>(null);
  const [mobileDropdown, setMobileDropdown] = useState<DropdownName>(null);

  const dropdowns: DropdownItem[] = [
    {
      name: "Portfolio",
      dropdownName: "portfolio",
      items: [
        { to: "/portfolio/general", text: "General" },
        { to: "/portfolio/international", text: "International" },
      ],
    },
    {
      name: "Company",
      dropdownName: "company",
      items: [
        { to: "/company/about-us", text: "About Us", icon: AboutUsIcon },
        { to: "/company/team", text: "Team", icon: TeamIcon },
        { to: "/company/work-with-us", text: "Work with us", icon: WorkWithUsIcon },
        { to: "/company/awards", text: "Awards & Achievements", icon: AwardsIcon },
      ],
    },
    {
      name: "Events & Media",
      dropdownName: "events",
      items: [
        { to: "/events-media/events", text: "Events", icon: EventsIcon },
        { to: "/events-media/media", text: "Media", icon: MediaIcon },
        { to: "/events-media/publications", text: "Publications", icon: PublicationsIcon },
      ],
    },
  ];

  // Desktop handlers
  const openDropdown = (name: DropdownName) => setActiveDropdown(name);
  const closeDropdown = () => setActiveDropdown(null);
  const toggleDropdown = (name: DropdownName) =>
    setActiveDropdown(prev => (prev === name ? null : name));

  // Mobile toggle handlers
  const openMobileDropdown = (name: DropdownName) => setMobileDropdown(name);
  const closeMobileDropdown = () => setMobileDropdown(null);
  const toggleMobileDropdown = (name: DropdownName) =>
    setMobileDropdown(prev => (prev === name ? null : name));

  // Close mobile panel on outside click
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
        closeMobileDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full border-t-2 px-8 py-4 flex justify-between items-center z-50 relative">
      <div className="flex items-center gap-4">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-[80%] h-auto" />
        </NavLink>
      </div>

      <div className="hidden lg:flex items-center gap-8 text-gray-800 text-md font-medium">
        <NavLink to="/services" className="hover:text-blue-600 transition">
          Services
        </NavLink>

        {dropdowns.map(dd => (
          <div
            key={dd.dropdownName}
            className="relative"
            onMouseEnter={() => openDropdown(dd.dropdownName)}
          >
            <button
              onClick={() => toggleDropdown(dd.dropdownName)}
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              {dd.name}
              {activeDropdown === dd.dropdownName ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>

            {activeDropdown === dd.dropdownName && (
              <div
                onMouseEnter={() => openDropdown(dd.dropdownName)}
                onMouseLeave={closeDropdown}
              >
                <DropdownMenu
                  dropdown={dd}
                  isOpen
                  onClose={closeDropdown}
                />
              </div>
            )}
          </div>
        ))}

        <NavLink to="https://naxa.com.np/geoai" className="hover:text-blue-600 transition">
          GeoAI
        </NavLink>
        <NavLink to="/blogs" className="hover:text-blue-600 transition">
          Blogs
        </NavLink>
        <NavLink to="/form" className="hover:text-blue-600 transition">
          Form
        </NavLink>
        <NavLink to="/map" className="hover:text-blue-600 transition">
          Maps
        </NavLink>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
       <NavLink
  to="/contact"
  className="
    inline-flex items-center gap-1 whitespace-nowrap
    bg-yellow-300 hover:bg-[#FFAB00]
    text-[#0B5BF5] font-semibold
    text-xs sm:text-sm md:text-base lg:text-lg
    px-3 md:px-5 py-2 transition
  "
>
  <span className="transform translate-x-0 group-hover:-translate-x-1 duration-200 ease-in-out">
    Let&apos;s Talk
  </span>
  <ArrowRight
    size={16}
    className="
      inline h-4 w-4 text-[#0B5BF5]
      transform opacity-0 group-hover:translate-x-1 group-hover:opacity-100
      transition-all duration-200 ease-in-out
    "
  />
</NavLink>
        <button
          className="lg:hidden z-50"
          onClick={() => setMenuOpen(open => !open)}
        >
          <Menu size={28} color="#FFAB00" />
        </button>
      </div>

      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[70%]
  bg-gradient-to-b from-[#FFAB00] to-[#ffdf20]
  z-40 transform transition-transform duration-300 ease-in-out ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#4682B4]"
          >
            <X size={28} color="blue" />
          </button>
        </div>

        <div className="px-6 pb-6 space-y-4">
          <NavLink
            to="/services"
            className="block text-gray-800 text-lg py-2 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>

          {dropdowns.map(dd => (
            <div
              key={dd.dropdownName}
              className="relative"
              onMouseEnter={() => openMobileDropdown(dd.dropdownName)}
              onMouseLeave={closeMobileDropdown}
            >
              <button
                className="flex justify-between w-full text-gray-800 text-lg py-2 hover:text-blue-600 transition-colors"
                onClick={() => toggleMobileDropdown(dd.dropdownName)}
              >
                {dd.name}
                {mobileDropdown === dd.dropdownName ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <DropdownMenu
                dropdown={dd}
                isMobile
                isOpen={mobileDropdown === dd.dropdownName}
                onClose={closeMobileDropdown}
              />
            </div>
          ))}

          <NavLink
            to="/blogs"
            className="block text-gray-800 text-lg py-2 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/form"
            className="block text-gray-800 text-lg py-2 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Form
          </NavLink>
          <NavLink
            to="/map"
            className="block text-gray-800 text-lg py-2 hover:text-blue-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Maps
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
