import React from "react";
import "./profile.css";
import profilePic from "../../images/profilePic.JPG";
import TechStack from "../techStack/TechStack";

function Profile() {
  return (
    <div className="profile-section">
      <div className="profile-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="profile-text">
          <h2>Hi, I'm Ryan.</h2>
          <p>I'm based in a little city called Provo from the 🏔️ of Utah.</p>
          <h1>
            As a <span className="highlight">Front-end Developer</span> with a
            keen eye for design, I create sleek, responsive React apps.
          </h1>
          <TechStack />
        </div>
      </div>
    </div>
  );
}

export default Profile;
