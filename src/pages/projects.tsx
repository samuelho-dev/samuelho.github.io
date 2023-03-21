import React from 'react';
import data from '../../util/resume.json';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { SiFirebase, SiTypescript } from 'react-icons/si';
import { SiPrisma } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { SiReactquery } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiSequelize } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import Image from 'next/image';

function Projects() {
  const projects = data.projects;
  // const imagemap = {
  //   Swapesy:
  // }
  const iconmap = {
    'React Native': <FaReact />,
    'React Query': <SiReactquery />,
    Typescript: <SiTypescript />,
    Firebase: <SiFirebase />,
    Prisma: <SiPrisma />,
    PostgreSQL: <SiPostgresql />,
    Javascript: <SiJavascript />,
    Sequelize: <SiSequelize />,
    AWS: <FaAws />,
    Node: <FaNodeJs />,
    NextJS: <TbBrandNextjs />,
  };
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, i) => (
        <div key={i} className="flex gap-4 p-6">
          <div className="w-1/2 bg-customLightPink hover:bg-none">
            <div className="mix-blend-darken grayscale filter hover:filter-none">
              <Image
                src={`/${project.name}.png`}
                alt={project.name}
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="flex items-center gap-4">
              <h5>{project.name}</h5>
              <a href={project.source} target="_blank">
                <BsGithub />
              </a>
            </div>

            <p>{project.role}</p>
            <p>{project.description}</p>

            <div className="flex flex-col gap-2">
              <ins>Technologies Used</ins>
              <div className="grid grid-cols-3 gap-4">
                {project.technologies.map((tech, k) => (
                  <div key={k} className="flex items-center gap-2">
                    {iconmap[tech]}
                    <sub className="w-full">{tech}</sub>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
