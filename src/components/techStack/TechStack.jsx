import React from "react";
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import "./techStack.css";

function TechStack() {
  return (
    <div className="tech-stack">
      <h3>Tech I ❤️:</h3>
      <div className="techstack">
        <div className="tech-item">
          <FaJsSquare size={40} color="#f0db4f" />
          <p>JavaScript</p>
        </div>
        <div className="tech-item">
          <FaReact size={40} color="#61DBFB" />
          <p>React</p>
        </div>
        <div className="tech-item">
          <FaHtml5 size={40} color="#e34c26" />
          <p>HTML5</p>
        </div>
        <div className="tech-item">
          <FaCss3Alt size={40} color="#264de4" />
          <p>CSS3</p>
        </div>
        <div className="tech-item">
          <FaPython size={40} color="#306998" />
          <p>Python</p>
        </div>
        <div className="tech-item">
          <SiMysql size={40} color="#00758f" />
          <p>MySQL</p>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
