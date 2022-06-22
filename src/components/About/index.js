import React, { useEffect } from "react";
import portrait from "../../assets/images/headshot.jpg"

function About() {
  useEffect(() => {
    document.title = "About";
  });

  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img className="rounded mx-auto" alt="self-portrait" style={ {height: '300px', width: '300px'}} src={portrait} />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h2>About Me</h2>
          <p>
            Full-stack web developer with a passion for learning and working
            towards solutions for modern web applications. With a recently
            earned certification from Rutgers University, I am seeking an
            opportunity to hone newly learned skills in both front and back end
            web development technologies.
          </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <h4>Strong Back-End Knowledge</h4>
          <p>
            Proficient in working with Node/Express, REST and GraphQL apis, SQL and NoSQL databases.
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <h4>React</h4>
          <p>
            Efficent at writing logic to manage state, use hooks, and render components.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
