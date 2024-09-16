import React from "react";
import banner from "../../public/assets/images/hero.png";
import pdf from "../Pdf/Resume.pdf";

function Header() {
  return (
    <div className="header-bg w-100 d-flex align-items-center" id="home">
      <div className="container bg-transparent">
        <div className="row bg-transparent height-100 d-flex align-items-center justify-content-center pt-4">
          <div className="col-md-6 col-12 bg-transparent">
            <div className="content text-white bg-transparent px-2 px-md-0">
              <h1 className="fw-bold primary-color text-grad text-capitalize">
                Hii.. i am vishal verma Frontend web developer
              </h1>
              <p className="fs-6 fw-normal bg-transparent">
                With Passionate for creating intuitive, responsive, and engaging
                web applications, I specialize in turning ideas into dynamic
                digital experiences .
              </p>
              <a
                href={pdf}
                download="resume.pdf"
                className="btn btn-outline-warning fs-6 fw-semibold text-capitalize py-2 px-4"
              >
                download cv
              </a>
            </div>
          </div>
          <div className="d-none d-md-block col-md-6 col-12 bg-transparent">
            <div className="img-wrap mx-auto">
              <img
                src={banner}
                className="img-fluid ms-auto"
                alt="hero-banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
