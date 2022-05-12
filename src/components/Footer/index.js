import React from "react";
import ghLogo from "../../assets/logos/gh-logo64.png";
import liLogo from "../../assets/logos/in21.png";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 fixed-bottom">
      <div className="container">
        <div className="row justify-content-center border-top border-3">
          <div className="col-1 py-2">
            <a href="https://github.com/adunny">
              <img
                src={ghLogo}
                style={{ height: "30px", width: "30px" }}
                alt="github logo"
              />
            </a>
          </div>
          <div className="col-1 py-2">
            <a href="https://www.linkedin.com/in/alen-dunn-505b8215b/">
              <img
                src={liLogo}
                style={{ height: "30px", width: "30px" }}
                alt="linkedin logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
