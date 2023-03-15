import React from 'react';
import data from '../../util/resume.json';

function Projects() {
  const projects = data.projects;
  console.log(projects);
  return (
    <div>
      {Object.keys(projects).map((item) => (
        <>
          {Object.keys(projects[item]).map((el) => {
            console.log('el', projects[item][el]);
            return (
              <>
                <p>{projects[item][el].title}</p>
                {projects[item].technologies.map((desc) => (
                  <p>{desc}</p>
                ))}
              </>
            );
          })}
        </>
      ))}
    </div>
  );
}

export default Projects;
