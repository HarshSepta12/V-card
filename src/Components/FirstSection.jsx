import React from "react";
import "./FirstSection.css";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Typed from 'typed.js';
import harsh from '../../public/harsh.png'


const FirstSection = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'Backend Developer','Python Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className="container-sm" >
      <div className="row text-center mx-auto w-100 text-light wid p-3">
        <div className="col-sm-6" data-aos="zoom-in"  data-aos-duration="1000">
          <span className="fw-bold text-start" >Hello!</span>
          <h1 className="fs-3 " >
            I'm <span>Harsh Septa</span>
          </h1>
          <p className='profession'>and I'm <span ref={el}></span></p>


          <div className="link-section d-flex justify-content-center align-item-center gap-2">
            <a className="link-anchor" href="https://github.com/HarshSepta12" target="blank">
              <FaGithub className="icon-1"/>
            </a>
            <a className="link-anchor"
              href="https://www.linkedin.com/in/harsh-septa-18ba3123b/"
              target="blank"
            >
              <FaLinkedin className="icon-1"/>
            </a>
            <a className="link-anchor" href="https://www.instagram.com/harshsepta/" target="blank">
              <FaInstagram className="icon-1"/>
            </a>
            <a className="link-anchor" href="https://x.com/Harshsepta1" target="blank">
              <FaXTwitter className="icon-1" />
            </a>
          </div>
        </div>
        <div className="col-sm-6" data-aos="zoom-in"  data-aos-duration="1000">
          <img className="img-1" src={harsh} alt="" width={200} />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
