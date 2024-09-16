import React from "react";
import { projects } from "../Data/Info";

function Projects() {
  return (
    <>
      <div className="wrapper pb-5 background-light" id="project">
        <div className="container bg-transparent">
          <h1 className="text-center fs-1 fw-bold py bg-transparent primary-color">Projects</h1>
          <div className="row justify-content-center g-4 mx-auto bg-transparent">
            {projects.map((e) => {
              return (
                <div className="col-lg-6 col-12 bg-transparent" key={e.id}>
                  <div className="row project-card p-3 p-md-4 mx-auto w-100 d-flex align-items-center" data-aos="fade-up"  data-aos-anchor-placement="top-center" data-aos-duration="2000">
                    <div className="d-none d-md-block col-md-3 g-0 img-wrp">
                     <div className="logo-wrp"> 
                     <img src={`/assets/${e.imgSrc}`} className="" alt="project" />
                     </div>
                    </div>
                    <div className="col-md-9 project-info position-relative">
                      <h3 className="fs-5 fw-bold text-capitalize m-0 mb-1 lh-2">
                        {e.project}
                      </h3>
                      <h5 className="fs-6 fw-semibold text-capitalize m-0 mb-1 lh-2 text-hilight">
                        {e.title}
                      </h5>
                      <p className="t-sm fw-normal m-0 lh-sm lh-md-2">{e.description}</p>
                      <a
                        href={e.link}
                        className="btn btn-warning py-1 px-3 mt-2  position-absolute end-0 capitalize"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
