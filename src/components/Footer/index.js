import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <div className="row justify-content-center border-top border-3 border-color-2">
          <div className="col-1 py-2">
            <a
              href="https://github.com/adunny"
              className="text-decoration-none text-dark"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <div className="col-1 py-2">
            <a
              href="https://www.linkedin.com/in/alen-dunn-505b8215b/"
              className="text-decoration-none text-dark"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
