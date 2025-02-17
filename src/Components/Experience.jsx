import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="container-sm">
      <div className="row text-center mx-auto w-100 text-light wid">
        <div className="col-sm-12 p-4">
          <h1 className="experience-color" data-aos="fade-up"
     data-aos-anchor-placement="top-center">My Experience</h1>
        </div>
        <div className="col-sm-12 mb-5" >
          <div className="card-2 text-start p-3">
               <h5>FXBytes Technologies Pvt. Ltd</h5>
               <span className="marginn">FEB-2024- JUNE-2024</span>
          </div>
          {/* <div className="card-2 text-start p-2 dis">
               <h5>Frontend Development</h5>
               <span className="marginn">FEB-2024 - Arpil-2024</span>
          </div>
        <div className="card-2 text-start p-2 dis">
               <h5>Backend Development</h5>
               <span className="marginn">April-2024 - June-2024</span>
          </div>
        <div className="card-2 text-start p-2 dis">
               <h5>DataBase Management</h5>
               <span className="marginn">June-2024 - July-2024</span>
          </div> */}
        </div>
      
      
      </div>
    </div>
  );
};

export default Experience;
