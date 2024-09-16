import React from "react";
import { experience } from "../Data/Info";

function Exeperience() {
  return (
    <div className="wrapper pb-5 background-light" id="experience">
      <div className="container bg-transparent">
        <div className="row bg-transparent">
          <h1 className="text-center fs-1 fw-bold py primary-color">
            Exeperience
          </h1>
          {experience.map((prop) => {
            return (
              <div className="col-lg-6 col-12 g-4 bg-transparent" key={prop.id}>
                <div
                  className="ex-card text-center p-4"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <div className="d-flex align-items-center bg-transparent justify-content-center position-relative gap-2">
                    <img
                      src={`/assets/${prop.imgUrl}`}
                      className="company-logo position-absolute start-0 top-0"
                      alt="logo"
                    />
                    <h2 className="fs-5 fw-bold m-0 lh-base primary-color">
                      {prop.company} {" - "} {prop.location}
                    </h2>
                  </div>
                  <h3 className="fs-6 fw-bold m-0 lh-base">{prop.roll}</h3>
                  <h6 className="fs-6 fw-bold m-0 lh-base text-hilight">
                    {prop.start} {" - "} {prop.end}
                  </h6>
                  <p className="t-sm fw-normal m-0 mt-1 lh-sm">{prop.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Exeperience;
