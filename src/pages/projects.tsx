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
        <div
          key={i}
          className={`flex gap-4 p-6 ${i % 2 !== 0 && 'flex-row-reverse'}`}
        >
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
          <div className="col flex w-1/2 flex-col justify-center">
            <div
              className={`flex items-center gap-4 ${
                i % 2 === 0 && 'justify-end'
              }`}
            >
              <h5 className="text-customWhite">{project.name}</h5>
              <a href={project.source} target="_blank">
                <BsGithub />
              </a>
            </div>

            <p
              className={`flex text-customWhite ${
                i % 2 === 0 && 'justify-end '
              }`}
            >
              {project.role}
            </p>
            <div className="bg-customBlue bg-opacity-80 p-2">
              <p className={`text-customWhite ${i % 2 === 0 && 'text-right'}`}>
                {project.description}
              </p>
            </div>
            <div className="flex flex-col justify-end gap-2">
              <p className={i % 2 === 0 && 'text-right'}>
                <ins className="text-customBlue">Technologies Used</ins>
              </p>
              <div
                className={`inline-grid grid-cols-3 gap-4 ${
                  i % 2 === 0 && 'justify-items-end'
                }`}
              >
                {project.technologies.map((tech, k) => (
                  <div key={k} className="flex items-center gap-2">
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
