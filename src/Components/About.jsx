import React from "react";
import { aboutData } from "../Data/Info";
import about from "../../public/assets/images/hero.png";
import pdf from "../Pdf/Resume.pdf"

function About() {
  return (
    <div className="wrapper pb-5" id="about">
      <div className="container">
        <h1 className="text-center fs-1 fw-bold py primary-color">About</h1>
        <div className="row d-flex align-items-center justify-content-center px-2 px-md-0">
          <div className="col-md-6 col-12 mb-5 md-mb-0">
            <div className="img-wrap " data-aos="fade-up-right"  data-aos-duration="2000">
              <img src={about} alt="about" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            {aboutData.map((props) => (
              <div key={props.id}>
                <p className="fw-normal about">{props.description}</p>
                <div className="row gap-0">
                  <div className="col-3 info">
                    <h6 className="t-sm">
                      <b>Name</b>
                    </h6>
                    <h6 className="t-sm">
                      <b>Address</b>
                    </h6>
                    <h6 className="t-sm">
                      <b>Education</b>
                    </h6>
                    <h6 className="t-sm">
                      <b>DOB : </b>
                    </h6>
                    <h6 className="t-sm">
                      <b>Contact </b>
                    </h6>
                    <h6 className="t-sm">
                      <b>Email </b>
                    </h6>
                    <h6 className="t-sm">
                      <b>Languages</b>
                    </h6>
                  </div>
                  <div className="col-9 g-0 info"> 
                    <h6 className="text-capitalize t-sm fw-bold">{props.name}</h6>
                    <h6 className="text-capitalize t-sm fw-bold">{props.address}</h6>
                    <h6 className="text-capitalize t-sm fw-bold">{props. Education}</h6>
                    <h6 className="text-capitalize t-sm fw-bold">{props.dob}</h6>
                    <h6 className="text-capitalize t-sm fw-bold">{props.contact}</h6>
                    <h6 className="">{props.email}</h6>
                    <h6 className="text-capitalize t-sm fw-bold">{props.language}</h6>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4">
            <a href={pdf} download= "resume.pdf" className="btn btn-outline-warning fs-6 fw-semibold text-capitalize py-2 px-4">download cv </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
