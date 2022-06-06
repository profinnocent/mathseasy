import React from "react";
import "./Maindash.css";
import exerpix from '../images/exam.png';
import reportpix from '../images/reportcard1.png';
import curpix from '../images/folders.png'



function Maindash() {
  return (
    <div className="maindash">
      <h1 className="mdashtitle w3-theme-d4 w3-block w3-margin-bottom">
      <img
          src="https://cdn-icons-png.flaticon.com/128/3771/3771278.png"
          alt="Logo"
        />
        DASHBOARD</h1>
      <div className="content">
        <div className="box curriculum w3-theme-l3">
          <img src={curpix} alt="curipix" />
          <h6>Curriculum</h6>
        </div>
        <div className="box exercises w3-theme-l3">
          <img src={exerpix} alt="exerpix" />
          <h6>Exercises</h6>
        </div>
        <div className="box tutorials w3-theme-l3">
        <img src="https://cdn-icons-png.flaticon.com/128/4214/4214144.png" alt="tutopix" />
         <h6>Tutorials</h6>
        </div>
        <div className="box reportcard w3-theme-l3">
        <img src={reportpix} alt="repopix" />
         <h6>Report Card</h6>
        </div>
        <div className="box inbox w3-theme-l3">
        <img src="https://cdn-icons-png.flaticon.com/128/1161/1161728.png" alt="inbopix" />
         <h6>Inbox</h6>
        </div>
        <div className="box profile w3-theme-l3">
        <img src="https://cdn-icons-png.flaticon.com/128/942/942748.png" alt="profpix" />
         <h6>Profile</h6>
        </div>
      </div>
    </div>
  );
}

export default Maindash;
