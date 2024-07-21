import React from "react";
import './Skill.css'

const Skill = () => {
  return (
    <div className="container-sm">
      <div className="row text-center mx-auto w-100 text-light wid">
        <div className="col-sm-12 p-4">
         <div className="card mx-auto p-2 text-light" data-aos="zoom-in-up" data-aos-duration="2000">
          <h1 className="fs-4 fw-bold web-color">Web Development</h1>
          <p>As a proficient web developer, I have extensive experience and expertise in various modern technologies.Like HTML5, CSS3, JavaScript, Bootstrap, React.Js, Node.js, MongoDB </p>
         </div>
         <div className="col-sm-12 p-2 mt-5 d-flex justify-content-center align-items-center flex-wrap gap-5" data-aos="zoom-in-right" data-aos-duration="2000">
          <img className="skill-img" src="public\images\html1280.webp" alt="HTML" />
          <img className="skill-img"  src="public\images\CSS3_logo.svg.png" alt="CSS" />
          <img className="skill-img"  src="public\images\Bootstrap_logo.svg" alt="" />
          <img className="skill-img"  src="public\images\javascript-8543231_1280.png" alt="" />
          <img className="skill-img"  src="public\images\react.svg" alt="" />
          <img className="skill-img"  src="public\images\nodejs.svg" alt="" />
          <img className="skill-img"  src="public\images\mongodb.svg" alt="" />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
