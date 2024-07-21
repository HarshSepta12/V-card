import React from "react";
import "./EnquryForm.css";

const EnquryForm = () => {
  return (
    <div className="container-sm">
      <div className="row text-center mx-auto w-100 text-light wid">
        <div className="col-sm-12 p-4 form-bg" >
          <div className="col-sm-12">
               <h1 className="khaki" data-aos="zoom-in-up" data-aos-duration="500">Let’s work together!</h1>
               <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
          </div>
        <form class="row g-3 mt-5">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="text" class="form-control" id="inputEmail4" placeholder="Enter Your First Name"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="inputPassword4" placeholder="Enter Your Last Name"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputAddress" placeholder="Harsh@gmail.com" />
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Send</button>
  </div>
</form>
        </div>
      </div>
    </div>
  );
};

export default EnquryForm;
