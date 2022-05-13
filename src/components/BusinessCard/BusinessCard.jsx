import React from "react";
import mail from "../../assets/Mail.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/TwitterIcon.svg";
import facebook from "../../assets/FacebookIcon.svg";
import instagram from "../../assets/InstagramIcon.svg";
import github from "../../assets/GitHubIcon.svg";

import "./BusinessCard.css";

const BusinessCard = () => {
  return (
    <div className="businnes_card">
      <div className="image-card"></div>

      <div className="info-card ">
        <div className="center">
          <h1>Devaraj Parasar</h1>
          <span>Web Developer</span>
          <p>devparasar.website</p>
        </div>

        <div className="buttons">
          <button className="btn btn-email" >
            <img src={mail} alt="devaraj.parasar@hotmail.com" />
            <span>Email</span>
          </button>
          <button className="btn btn-linkedin">
            <img src={linkedin} alt="https://www.linkedin.com/in/devaraj-parasar/" />
            <span>LinkedIn</span>
          </button>
        </div>

        <div className="content-card">
          <span>About</span>
          <p>
            I am a Web developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <span>Interests</span>
          <p>
            React.js. Node.js. React-Native. CoreJava. CorePHP. MySQL. JavaScript. RestAPI.
            Bootstrap. SCSS. Entrepreneur. Agile Technologies. Project Management.
          </p>
        </div>
      </div>
      <div className="footer-card">
        <div className="footer-icons">
          <img src={twitter} alt="https://twitter.com/DevarajParasar" />
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={github} alt="https://github.com/DevParasar" />
        </div>
      </div>
    </div>
  );
};

export { BusinessCard };
