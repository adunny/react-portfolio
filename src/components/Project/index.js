/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from "react";

function Project() {
  useEffect(() => {
    document.title = "Projects";
  });

  const projects = [
    {
      name: "Concert Vagabond",
      desc: "Search for an artist to find upcoming concerts and tickets.",
      link: "https://adunny.github.io/concert-vagabond/",
      repo: "https://github.com/adunny/concert-vagabond",
      img: 'https://i.imgur.com/KCTGBIy.png'
    },
    {
      name: "PodFreaks",
      desc: "Podcast forum to leave reviews for podcasts.",
      link: "https://evening-tor-85614.herokuapp.com/",
      repo: "https://github.com/NicoleBarranca/PodFreaks",
      img: 'https://i.imgur.com/ru3cuvx.png'
    },
    {
      name: "Placeholder Project",
      desc: "Nulla culpa reprehenderit laboris laborum nulla pariatur tempor anim aliquip labore cupidatat deserunt eu aute.",
      link: "",
      repo: "",
      img: 'https://placeholder.pics/svg/500x200'
    },
  ];

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12">
          
        </div>
      </div>
      {projects.map((project) => (
        <div key={project.name} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={project.img}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">{project.name}</h4>
                <p className="card-text">{project.desc}</p>
                <p className="card-text">
                  <small className="text-muted">
                    <a href={project.link} className="btn bg-secondary text-light">Website</a>
                    <span>     </span>
                    <a href={project.repo} className="btn bg-secondary text-light">Github</a>
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
