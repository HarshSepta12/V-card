import React, { useEffect } from "react";
import "./App.css";
import FirstSection from "./Components/FirstSection";
import AboutMe from "./Components/AboutMe";
import Skill from "./Components/Skill";
import MyWork from "./Components/MyWork";
import Experience from "./Components/Experience";
import EnquryForm from "./Components/EnquryForm";
import ContactMe from "./Components/ContactMe";
import Aos from "aos";
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init();
  },[])
  return (
    <div className="container">
      {/* <div className="row"> */}
        <FirstSection />
        <AboutMe />
        <Skill />
        <MyWork />
        <Experience />
        <EnquryForm />
        <ContactMe />
      {/* </div> */}
    </div>
  );
};

export default App;
