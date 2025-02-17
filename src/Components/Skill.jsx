import React from "react";
import './Skill.css';
import html from '../../public/images/html1280.webp';
import css from '../../public/images/CSS3_logo.svg.png';
import bootstrap from '../../public/images/Bootstrap_logo.svg';
import javascript from '../../public/images/javascript-8543231_1280.png';
import react from '../../public/images/react.svg';
import node from '../../public/images/nodejs.svg';
import mongodb from '../../public/images/mongodb.svg';


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
          <img className="skill-img" src={html} alt="HTML" />
          <img className="skill-img"  src={css} alt="CSS" />
          <img className="skill-img"  src={bootstrap} alt="bootstrap" />
          <img className="skill-img"  src={javascript} alt="javascript" />
          <img className="skill-img"  src={react} alt="react" />
          <img className="skill-img"  src={node} alt="node" />
          <img className="skill-img"  src={mongodb} alt="mongodb" />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
