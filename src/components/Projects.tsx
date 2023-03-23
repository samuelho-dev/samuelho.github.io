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
      <h2 className=" text-slate-200">Projects</h2>
      <ul className="flex flex-col items-center gap-24 md:gap-4">
        {projects.map((project, i) => (
          <li
            key={i}
            className={`flex w-fit flex-col gap-4  md:flex-row md:p-6 ${
              i % 2 !== 0 && 'md:flex-row-reverse'
            }`}
          >
            <div
              className={`z-0 w-fit bg-customLightPink hover:bg-none ${
                i % 2 !== 0 && 'md:ml-[-10%]'
              }`}
            >
              <div className="mix-blend-darken grayscale filter hover:filter-none">
                <Image
                  src={project.image}
                  alt={project.name}
                  height={500}
                  width={500}
                  className="object-scale-down"
                />
              </div>
            </div>
            <div
              className={`z-10 flex w-full flex-col justify-center md:w-1/2 ${
                i % 2 === 0 && 'md:ml-[-10%]'
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

              <div
                className={`flex flex-wrap gap-2 md:flex-nowrap md:gap-4 ${
                  i % 2 === 0 && 'justify-end'
                } `}
              >
                {project.technologies.map((tech, k) => (
                  <div key={k} className={`flex items-center gap-2 pt-4`}>
                    <div>{iconmap[tech]}</div>
                    <sub className=" text-slate-300 md:whitespace-nowrap">
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
