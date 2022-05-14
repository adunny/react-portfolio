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
    },
    {
      name: "PodFreaks",
      desc: "Podcast forum to leave reviews for podcasts.",
      link: "https://evening-tor-85614.herokuapp.com/",
      repo: "https://github.com/NicoleBarranca/PodFreaks",
    },
    {
      name: "Placeholder Project",
      desc: "Nulla culpa reprehenderit laboris laborum nulla pariatur tempor anim aliquip labore cupidatat deserunt eu aute.",
      link: "",
      repo: "",
    },
  ];

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12">
          <p>Check out my projects</p>
        </div>
      </div>
      {projects.map((project) => (
        <div key={project.name} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://placeholder.pics/svg/500x200"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.desc}</p>
                <p className="card-text">
                  <small className="text-muted">(github icon here?)</small>
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
