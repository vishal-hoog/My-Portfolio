import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="nav-wrap w-100 d-flex align-items-center position-fixed top-0 z-1">
      <div className="container bg-transparent">
        <nav className="navbar navbar-expand-lg bg-transparent py-2">
          <div className="container-fluid bg-transparent g-0">
            <a className="navbar-brand fs-4 fs-sm-5 fw-bold bg-transparent" href="#home">
              Vishal Verma
            </a>
            <button
              className="navbar-toggler text-white"
              type="button"
              onClick={toggleMenu} // Toggle menu on button click
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-white">
                <i className="bi bi-list fs-2 fw-bold"></i>
              </span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto bg-transparent">
                <a
                  className="nav-link active text-white text-capitalize fs-6 fw-semibold"
                  aria-current="page"
                  href="#home"
                  onClick={closeMenu} // Close menu on link click
                >
                  Home
                </a>
                <a
                  className="nav-link text-white text-capitalize fs-6 fw-semibold"
                  href="#about"
                  onClick={closeMenu} // Close menu on link click
                >
                  About
                </a>
                <a
                  className="nav-link text-white text-capitalize fs-6 fw-semibold"
                  href="#experience"
                  onClick={closeMenu} // Close menu on link click
                >
                  Experience
                </a>
                <a
                  className="nav-link text-white text-capitalize fs-6 fw-semibold"
                  href="#skills"
                  onClick={closeMenu} // Close menu on link click
                >
                  Skills
                </a>
                <a
                  className="nav-link text-white text-capitalize fs-6 fw-semibold"
                  href="#project"
                  onClick={closeMenu} // Close menu on link click
                >
                  Projects
                </a>
                <a
                  className="nav-link text-white text-capitalize fs-6 fw-semibold"
                  href="#contact"
                  onClick={closeMenu} // Close menu on link click
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
