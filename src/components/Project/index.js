import React, { useEffect } from "react";

function Project() {
  useEffect(() => {
    document.title = "Projects";
  });

  const projects = [
    {
      name: "Concert Vagabond",
      desc: "Search for an artist to find upcoming concerts and tickets.",
      link: 'https://adunny.github.io/concert-vagabond/',
      repo: 'https://github.com/adunny/concert-vagabond'
    },
    {
      name: "PodFreaks",
      desc: "Podcast forum to leave reviews for podcasts.",
      link: 'https://evening-tor-85614.herokuapp.com/',
      repo: 'https://github.com/NicoleBarranca/PodFreaks'
    },
    {
        name: 'Placeholder Project',
        desc: 'Nulla culpa reprehenderit laboris laborum nulla pariatur tempor anim aliquip labore cupidatat deserunt eu aute.',
        link: '',
        repo: ''
    }
  ];

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12">
          <p>Check out my projects</p>
        </div>
      </div>
      {projects.map((project) => (
          <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://placeholder.pics/svg/500x200" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{project.name}</h5>
                <p class="card-text">
                  {project.desc}
                </p>
                <p class="card-text">
                  <small class="text-muted">(github icon here?)</small>
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
