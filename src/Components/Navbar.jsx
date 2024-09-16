import React from "react";

function Navbar() {
  
  return (
    <div className="nav-wrap w-100 d-flex align-items-center position-fixed top-0 z-1">
      <div className="container bg-transparent">
        <nav className="navbar navbar-expand-lg bg-transparent py-2">
          <div className="container-fluid bg-transparent g-0 ">
            <a className="navbar-brand fs-4 fs-sm-5 fw-bold bg-transparent" href="#home">
              Vishal verma
            </a>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-white"><i class="bi bi-list fs-2 fw-bold"></i></span>
            </button>
            <div className="collapse navbar-collapse bg-lg-transparent" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto bg-transparent">
                <a
                  className="nav-link active text-white text-capitalize fs-6 fw-semibold"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
                <a
                  className="nav-link text-white text-capitalize fs-6 fw-semibold"
                  href="#about"
                >
                  About
                </a>
                <a
                  className="nav-link  text-white text-capitalize fs-6 fw-semibold"
                  href="#experience"
                >
                  Experience
                </a>
                <a
                  className="nav-link  text-white text-capitalize fs-6 fw-semibold"
                  href="#skills"
                >
                  Skills
                </a>
                <a
                  className="nav-link  text-white text-capitalize fs-6 fw-semibold"
                  href="#project"
                >
                  Projects
                </a>
              
                <a
                  className="nav-link  text-white text-capitalize fs-6 fw-semibold"
                  href="#contact"
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
