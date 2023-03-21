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

interface IconMap {
  [key: string]: React.ReactElement;
}

function Projects() {
  const projects = data.projects;
  const iconmap: IconMap = {
    'React Native': <FaReact color="white" />,
    'React Query': <SiReactquery color="white" />,
    Typescript: <SiTypescript color="white" />,
    Firebase: <SiFirebase color="white" />,
    Prisma: <SiPrisma color="white" />,
    PostgreSQL: <SiPostgresql color="white" />,
    Javascript: <SiJavascript color="white" />,
    Sequelize: <SiSequelize color="white" />,
    AWS: <FaAws color="white" />,
    Node: <FaNodeJs color="white" />,
    NextJS: <TbBrandNextjs color="white" />,
  };
  return (
    <section className="max-w-6xl">
      <ul className="flex flex-col items-center gap-4">
        {projects.map((project, i) => (
          <li
            key={i}
            className={`flex w-fit gap-4 p-6 ${
              i % 2 !== 0 && 'flex-row-reverse'
            }`}
          >
            <div
              className={`z-0 w-fit bg-customLightPink hover:bg-none ${
                i % 2 !== 0 && 'ml-[-10%]'
              }`}
            >
              <div className="mix-blend-darken grayscale filter hover:filter-none">
                <Image
                  src={`/${project.name}.png`}
                  alt={project.name}
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div
              className={`z-10 flex w-1/2 flex-col justify-center ${
                i % 2 === 0 && 'ml-[-10%]'
              }`}
            >
              <div
                className={`flex items-center gap-4 ${
                  i % 2 === 0 && 'justify-end'
                }`}
              >
                <a
                  href={project.source}
                  className="cursor-pointer"
                  target="_blank"
                >
                  <h1 className=" text-customLightPink hover:text-opacity-80">
                    {project.name}
                  </h1>
                </a>
                <a href={project.source} target="_blank">
                  <BsGithub />
                </a>
              </div>

              <p
                className={`flex text-slate-700 ${
                  i % 2 === 0 && 'justify-end '
                }`}
              >
                {project.role}
              </p>
              <div className="bg-customBlue bg-opacity-80 p-2">
                <p className={`text-slate-300 ${i % 2 === 0 && 'text-right'}`}>
                  {project.description}
                </p>
              </div>

              <div className={`flex justify-end gap-4 `}>
                {project.technologies.map((tech, k) => (
                  <div key={k} className={`flex items-center gap-2 pt-4`}>
                    <div>{iconmap[tech]}</div>
                    <sub className=" whitespace-nowrap text-slate-300">
                      {tech}
                    </sub>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
