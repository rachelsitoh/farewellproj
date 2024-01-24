import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div
          className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[10vh] left-2 ${
            isMenuOpen ? "top-[9%]" : "-top-[100%]"
          } md:w-auto w-full flex items-center px-5`}
          style={{ color: "#A9A9A9" }}
        >
          <div className="bg-indigo-900 md:bg-transparent p-4 rounded-md shadow-lg z-10  w-[97%] ">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <Link to="/" className="hover:text-gray-500 ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/whatWeDo" className="hover:text-gray-500">
                  What we do
                </Link>
              </li>
              <li>
                <Link to="/keyHighlights" className="hover:text-gray-500">
                  Key Highlights
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
