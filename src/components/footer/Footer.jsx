import React from "react";
import "./footer.css"; // Create this CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Ryan Kane. All Rights Reserved.</p>
        <div className="social-links">
          <a
            href="https://github.com/rtkane"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rtkane"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:rtkane@byu.edu">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
