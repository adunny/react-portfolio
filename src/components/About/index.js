import React, { useEffect } from "react";

function About() {
    useEffect(() => {
      document.title = 'About'
    });

  return (
    <section className="container mt-4">
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
      <div className="row mt-3">
          <div className="col-6">
              <h4>Blurb 1</h4>
              <p>Fugiat excepteur mollit deserunt nostrud nostrud voluptate ex esse culpa elit aute.</p>
          </div>
          <div className="col-6">
              <h4>Blurb 2</h4>
              <p>Fugiat excepteur mollit deserunt nostrud nostrud voluptate ex esse culpa elit aute.</p>
          </div>
      </div>
    </section>
  );
}

export default About;
