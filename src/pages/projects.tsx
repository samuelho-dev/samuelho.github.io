import React from 'react';
import data from '../../util/resume.json';

function Projects() {
  const projects = data.projects;
  return (
    <div>
      {projects.map((project, i) => (
        <div key={i}>
          <p>{project.title}</p>
          {project.description.map((desc) => (
            <p>{desc}</p>
          ))}
          {project.technologies.map((tech) => (
            <p>{tech}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Projects;
