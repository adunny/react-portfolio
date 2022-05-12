import React, { useEffect } from "react";

function About() {
    useEffect(() => {
      document.title = 'About'
    });

  return (
    <section className="container">
      <div className="row">
        <div className="col-4">
          <img alt="self-portrait" src="https://placeholder.pics/svg/300" />
        </div>
        <div className="col-4">
          <h2>About Me</h2>
          <p>
            Non fugiat dolor nostrud adipisicing anim in est aute id culpa
            officia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
