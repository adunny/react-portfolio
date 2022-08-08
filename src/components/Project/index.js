/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from "react";

function Project() {
  useEffect(() => {
    document.title = "Projects";
  });

  const projects = [
    {
      name: "GlobalChat",
      desc: "Real-time instant messaging app",
      link: "https://globalchat0.herokuapp.com/",
      repo: "https://github.com/adunny/mern-chat-app",
      img: "https://i.imgur.com/YdW1pIw.png",
    },
    {
      name: "PodFreaks",
      desc: "Podcast forum to leave reviews for podcasts.",
      link: "https://evening-tor-85614.herokuapp.com/",
      repo: "https://github.com/NicoleBarranca/PodFreaks",
      img: "https://i.imgur.com/ru3cuvx.png",
    },
    {
      name: "WhateverNow",
      desc: "WhateverNow is an easy to use social media application where users can create an account and have access to a feed of different posts by various users.",
      link: "https://whatever-now.herokuapp.com/",
      repo: "https://github.com/chloeyarb/Whatever-Now",
      img: "https://i.imgur.com/Sbjv56D.png",
    },
  ];

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12"></div>
      </div>
      {projects.map((project) => (
        <div key={project.name} className="card mb-3 project-cards">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={project.img}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h4 className="card-title">{project.name}</h4>
                <p className="card-text">{project.desc}</p>
                <p className="card-text mt-5">
                  <small className="text-muted">
                    <a href={project.link} className="btn btn-color text-dark">
                      Website
                    </a>
                    <span> </span>
                    <a href={project.repo} className="btn btn-color text-dark">
                      Github
                    </a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
