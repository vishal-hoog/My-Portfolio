import React from "react";
import { skills } from "../Data/Info";

function Skills() {
  return (
    <div className="wrapper pb-5" id="skills">
      <div className="container">
        <h1 className="text-center fs-1 fw-bold py primary-color">Skills</h1>
        <div className="card-wrapper">
          {skills.map((prop) => {
            return (
              <div className="skill-card text-center bg-white" key={prop.id}  data-aos="flip-left" data-aos-duration="2000">
                <img src={`/assets/${prop.imgSrc}`} className="bg-white" alt="logo" />
                <h5 className="fs-6 fw-semibold color-black bg-white">{prop.title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
