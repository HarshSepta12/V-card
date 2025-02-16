import React from "react";
import "./AboutMe.css";
import harsh from "../../public/harsh.png";
const AboutMe = () => {
  return (
    <div className="container-sm">
      <div className="row text-center mx-auto w-100 text-light wid">
        <div className="col-sm-4 my-auto">
          <img
            className="img-2"
            src={harsh}
            alt="Harsh"
            width={250}
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
        </div>
        <div className="col-sm-8">
          <span
            className="text-center fw-bold abt"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            About Me
          </span>
          <p
            className="font"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            I’m a passionate MERN Stack Developer eager to turn ideas into
            captivating online experiences. With skills in HTML, CSS,
            JavaScript, Bootstrap, React and NodeJs and MongoDB. I aim to create
            userfriendly websites that leave a lasting impression. Let’s
            collaborate to build something amazing together.
          </p>
          <div class="letter">
            <div class="header" data-aos="zoom-out-left">
              <p>
                Name: <span className="Persnal-detail">Harsh Septa</span>
              </p>
              <p>
                DOB: <span className="Persnal-detail">12/04/2000</span>
              </p>
              <p>
                Address: <span className="Persnal-detail">Indore MP</span>
              </p>
              <p>
                Email:{" "}
                <span className="Persnal-detail">harshservi48@gmail.com</span>
              </p>
              <a href="public\Resume\HarshSepta7047916634.pdf" target="blank">
                <div className="btn btn-warning ms-5 cen">View Resume</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
