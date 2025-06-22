import logo from "@/assets/logo.png";
import { FaWhatsapp, FaFacebookMessenger, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-100 pb-6 border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">

          <div className="md:w-1/3 flex flex-col gap-3">
            <img src={logo} alt="naxa logo" className="w-36 mb-4" />
            <div className="font-bold mb-1">Naxa Pvt Ltd.</div>
            <div className="text-gray-700 text-[15px]">
              Omkareshwor Mandir Road,<br />
              Shantinagar, Kathmandu, Nepal<br />
              <span className="block mt-2 text-gray-500 text-sm">
                +014-516543, +977-9802372160, +977-9802355093
              </span>
              <span className="block text-gray-500 text-sm">
                info@naxa.com.np<br />
                business@naxa.com.np
              </span>
            </div>
            <div className="font-semibold mt-4">Chat With Us Now!</div>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://wa.me/9802372160" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-10 h-10 bg-green-500 text-white rounded-full p-2 hover:scale-110 transition" />
              </a>
              <a href="https://m.me/naxanepal" target="_blank" rel="noopener noreferrer">
                <FaFacebookMessenger className="w-10 h-10 bg-blue-500 text-white rounded-full p-2 hover:scale-110 transition" />
              </a>
            </div>
            <div className="flex gap-4 mt-6 text-yellow-400">
              <a href="https://facebook.com/naxanepal" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-yellow-600" />
              </a>
              <a href="https://linkedin.com/company/naxa-pvt-ltd" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-yellow-600" />
              </a>
              <a href="https://twitter.com/naxanepal" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-yellow-600" />
              </a>
              <a href="https://instagram.com/naxa.np" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-yellow-600" />
              </a>
            </div>
          </div>

          <div className="md:w-1/4">
            <div className="font-semibold mb-2">Services</div>
            <div className="font-semibold mb-1">Portfolio</div>
            <ul className="text-gray-500 text-[15px] space-y-1">
              <li><Link to="/portfolio/general" className="hover:text-yellow-600">General</Link></li>
              <li><Link to="/portfolio/international" className="hover:text-yellow-600">International</Link></li>
            </ul>
          </div>

          <div className="md:w-1/3 flex flex-col md:flex-row gap-10">
            <div>
              <div className="font-semibold mb-2">Company</div>
              <ul className="text-gray-500 text-[15px] space-y-1">
                <li><Link to="/company/about" className="hover:text-yellow-600">About us</Link></li>
                <li><Link to="/company/team" className="hover:text-yellow-600">Team</Link></li>
                <li><Link to="/company/careers" className="hover:text-yellow-600">Work with us</Link></li>
                <li><Link to="/company/awards" className="hover:text-yellow-600">Awards & Achievements</Link></li>
                <li><Link to="/company/media-kit" className="hover:text-yellow-600">Media Kit</Link></li>
              </ul>
              <div className="font-semibold mt-4 mb-2">Events & Media</div>
              <ul className="text-gray-500 text-[15px] space-y-1">
                <li><Link to="/events" className="hover:text-yellow-600">Events</Link></li>
                <li><Link to="/media" className="hover:text-yellow-600">Media</Link></li>
                <li><Link to="/publications" className="hover:text-yellow-600">Publications</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2 mt-2 md:mt-0">Blog</div>
              <ul className="text-gray-500 text-[15px] space-y-1">
                <li><Link to="/blog" className="hover:text-yellow-600">Blog</Link></li>
              </ul>
              <div className="font-semibold mt-4 mb-2">Contact</div>
              <ul className="text-gray-500 text-[15px] space-y-1">
                <li><Link to="/contact" className="hover:text-yellow-600">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-gray-400 text-sm gap-2">
          <span>© NAXA 2025. All Rights Reserved.</span>
          <button
            className="fixed bottom-6 right-6 bg-yellow-100 hover:bg-yellow-300 rounded-full p-3 shadow hover:shadow-lg transition z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
              <path d="M9 13V5M9 5L5 9M9 5l4 4" stroke="#0B5BF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
