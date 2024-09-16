import React from "react";
import { contactInfo, aboutData } from "../Data/Info";

function Contact() {
  return (
    <div className="" id="contact">
      <div className="container">
        <h1 className="text-center fs-1 fw-bold py background-light primary-color">
          Contact me
        </h1>
        <div className="row py-4 px-2 px-md-0">
          {contactInfo.map((prop) => {
            return (
              <div className="col-md-4 col-12" key={prop.id}>
                <h4 className="fs-4 fw-bold text-capitalize m-0  mb-3 lh-2 primary-color">
                  {prop.heading}
                </h4>
                <p className="fs-6 fw-semibold d-flex align-items-center m-0 lh-2">
                  <i className="bi bi-telephone fs-5 me-2 fw-bold primary-color"></i>
                  {prop.info1}
                </p>
                <p className="fs-6 fw-semibold align-items-center m-0 lh-2">
                  <i className="bi bi-telephone fs-5 me-2 fw-bold primary-color"></i>
                  {prop.info2}
                </p>
                <p className="fs-6 fw-semibold align-items-center m-0 lh-2">
                  <i className="bi bi-envelope-at fs-5 me-2 fw-bold primary-color"></i>
                  {prop.info3}
                </p>
              </div>
            );
          })}

          {aboutData.map((prop) => {
            return (
              <div className="col-md-4 col-12 mt-3 mt-md-0 text-md-center" key={prop.id}>
                <h4 className="fs-4 fw-bold text-capitalize m-0  mb-3 lh-2 primary-color">
                  address
                </h4>
                <p className="fs-6 fw-semibold text-capitalize pe-3 pe-md-0 m-0 lh-2 w-70 mx-auto">
                  {prop.address}
                </p>
                <p className="fs-6 fw-semibold text-capitalize m-0 lh-2">
                 Pin : {prop.pin}
                </p>
              </div>
            );
          })}

          <div className="col-md-4 col-12 mt-3 mt-md-0 text-md-end">
            <h4 className="fs-4 fw-bold text-capitalize mb-3 m-0 lh-2 primary-color">
              follow
            </h4>
            <div className="social-icon ">
              <a href="https://www.linkedin.com/in/vishal-verma-a7b8541bb">
                <i class="bi bi-linkedin fs-3 fw-bold text-end ms-2 "></i>
              </a>
              <a href="">
                <i class="bi bi-instagram fs-3 fw-bold text-end ms-2 "></i>
              </a>
              <a href="">
                <i class="bi bi-facebook fs-3 fw-bold text-end ms-2 "></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="coppyright mb-0 t-sm fw-bold text-capitalize text-center py-3 text-hilight">
        coppyright @ 2024 vishal | powered by windowvishal.com
      </p>
    </div>
  );
}

export default Contact;
