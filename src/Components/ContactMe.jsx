import React from "react";
import "./ContactMe.css";
import { MdWifiCalling3 } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";


const ContactMe = () => {
  return (
    <div className="container-sm">
      <div className="row text-center mx-auto w-100 text-light wid p-2 mb-3">
        <div className="col-sm-12 d-flex justify-content-center align-items-center flex-column gap-3">
            <h1 className="contact-me-font"  data-aos="zoom-in">Contact Me</h1>
          <div className="call-section d-flex justify-content-center align-items-center" data-aos="zoom-in-left" data-aos-duration="2000">
            <MdWifiCalling3 className="icons" />
            <a className="anchor-color " href="tel:+917047916634" target="blank">
              7047916634
            </a>
          </div>

          <div className="mail-section d-flex justify-content-center align-items-center" data-aos="zoom-in-left" data-aos-duration="2000">
            <MdOutlineMail className="icons" />
            <a className="anchor-color" href="mailto:harshservi48@gmail.com.com" target="blank">
              harshservi48@gmail.com
            </a>
          </div>

          <div className="location-section d-flex justify-content-center align-items-center" data-aos="zoom-in-left" data-aos-duration="2000">
            <MdLocationPin className="icons" />
            <a className="anchor-color"
              href="https://www.google.com/maps/place/New+Palasia,+Indore,+Madhya+Pradesh+452001/@22.7264264,75.878637,16z/data=!3m1!4b1!4m6!3m5!1s0x3962fd4773f75357:0xd4c16ad55b02adbe!8m2!3d22.724355!4d75.8838944!16s%2Fm%2F09gb73n?entry=ttu"
              target="blank"
            >
              Indore, Madhya Paradesh
            </a>
          </div>
          {/* <FaInstagram  className="icons"/>
      <FaXTwitter className="icons"/> */}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
