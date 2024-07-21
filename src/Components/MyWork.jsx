import React from "react";
import "./MyWork.css";
import { RiShareCircleFill } from "react-icons/ri";
import project1 from '../../public/ProjecImages/project1.png';
import project2 from '../../public/ProjecImages/project2.png';
import project3 from '../../public/ProjecImages/project3.png';
import project4 from '../../public/ProjecImages/project5.png';
import project5 from '../../public/ProjecImages/project7.png';
import project6 from '../../public/ProjecImages/project8.png';


const MyWork = () => {
  return (
    <div className="container-sm">
      <div className="row text-center mx-auto w-100 text-light wid">
        <div className="col-sm-12 p-4">
          <h1 className="work-color">My Recent Work</h1>
        </div>
        <div className="col-sm-12 d-flex justify-content-center align-items-center gap-3 flex-wrap mb-5" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000">
          <div className="img-section">
            <img
              className="project-img"
              src={project1}
              alt="project1"
            />
            <div className="abs">
            <a href="https://quiz-app-gold-pi.vercel.app/" target="blank">
              <RiShareCircleFill />
              <p>Live Preview</p>
            </a>
            </div>

          </div>

          <div className="img-section">
            <img
              className="project-img"
              src={project2}
              alt="project2"
            />
            <div className="abs">
              <a href="https://todo-app-lemon-nu.vercel.app/" target="blank">
              <RiShareCircleFill />
              <p>Live Preview</p>
              </a>
            </div>
          </div>

          <div className="img-section">
            <img
              className="project-img"
              src={project3}
              alt="project3"
            />
            <div className="abs">
            <a href="https://random-copy-image.vercel.app/" target="blank">
              <RiShareCircleFill />
              <p>Live Preview</p>
            </a>
            </div>
          </div>

          {/* <div className="img-section">
            <img
              className="project-img"
              src="public\ProjecImages\project4.png"
              alt=""
            />
            <div className="abs">
              <RiShareCircleFill />
              <p>Live Preview</p>
            </div>
          </div> */}

          <div className="img-section">
            <img
              className="project-img"
              src={project4}
              alt="project4"
            />
            <div className="abs">
            <a href="https://bootstrap-project02.vercel.app/" target="blank">
              <RiShareCircleFill />
              <p>Live Preview</p>
            </a>
            </div>
          </div>

          <div className="img-section">
            <img
              className="project-img"
              src={project5}
              alt="project5"
            />
            <div className="abs">
              <a href="https://country-details-using-api.vercel.app/index.html">
              <RiShareCircleFill />
              <p>Live Preview</p>
              </a>
            </div>
          </div>

          <div className="img-section">
            <img
              className="project-img"
              src={project6}
              alt="project6"
            />
            <div className="abs">
              <a href="https://calculator-mu-sandy.vercel.app/">
              <RiShareCircleFill />
              <p>Live Preview</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
