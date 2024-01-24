import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <header className="overallHeader">
      <div>
        <Link to="/" className="Link">
          Home
        </Link>
      </div>
      <div>
        <Link to="/about" className="Link">
          About Us
        </Link>
      </div>
      <div>
        <Link to="/whatWeDo" className="Link">
          What We Do
        </Link>
      </div>
      <div>
        <Link to="/keyHighlights" className="Link">
          Key Highlights
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
