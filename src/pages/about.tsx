import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { TbBrandMongodb } from 'react-icons/tb';
import { IoLogoNodejs } from 'react-icons/io';
import {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiAbletonlive,
  SiBlender,
  SiAdobe,
} from 'react-icons/si';
import { gsap } from 'gsap';

function about() {
  return (
    <section className="flex flex-col items-center justify-center px-2">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-4 md:w-3/4 md:flex-row">
        <div className="w-fit bg-customLightPink hover:bg-none">
          <div className="mix-blend-darken grayscale filter hover:filter-none">
            <Image
              src="https://res.cloudinary.com/ddhal4lbv/image/upload/v1679541608/Portfolio/profile_xabblb.jpg"
              height={100}
              width={300}
              alt="profile"
            />
          </div>
        </div>
        <div className="flex flex-col px-2 md:w-1/2">
          <p>
            Hey! My name is Samuel and I have a passion for building cool
            products. I graduated from UC Santa Barbara in 2018 with a B.A in
            Economics and in my previous roles, I had worked in corporate
            lending and FP&A, but I had always been drawn towards the creative
            and problem solving aspects of software engineering. Through
            software and design I felt empowered to develop my own solutions and
            tools.
            <br></br>
            In June 2022, I decided to make the leap into the world of software
            and began learning the basics of development which led me to study
            software engineering at{' '}
            <a
              href="https://www.hackreactor.com/"
              target="_blank"
              className="border-b-2 border-transparent text-customBlue transition duration-300 hover:border-customBlue"
            >
              Hack Reactor
            </a>
            . If you would like to check out some of my projects check out my{' '}
            <a
              href="https://github.com/samuelho-dev"
              target="_blank"
              className="border-b-2 border-transparent text-customBlue transition duration-300 hover:border-customBlue"
            >
              github
            </a>
            , and if you are a recruiter click{' '}
            <Link
              href={'/Resume_SamuelHo.pdf'}
              className="border-b-2 border-transparent text-customBlue transition duration-300 hover:border-customBlue"
              download={'/Resume_SamuelHo.pdf'}
            >
              here
            </Link>{' '}
            for my resume or you can reach me at{' '}
            <ins>samuelho343@gmail.com</ins>.<br></br>
            On the side I enjoy making music and recently have been enjoying
            getting into 3D art.
          </p>
          <p>Some technologies I work with:</p>
          <ul className="inline-grid grid-cols-3 gap-2 py-2">
            <li className="flex items-center gap-2">
              <SiNextdotjs />
              <sub>NextJS</sub>
            </li>
            <li className="flex items-center gap-2">
              <SiTypescript />
              <sub>Typescript</sub>
            </li>
            <li className="flex items-center gap-2">
              <SiJavascript />
              <sub>JavaScript</sub>
            </li>
            <li className="flex items-center gap-2">
              <IoLogoNodejs />
              <sub>Node</sub>
            </li>
            <li className="flex items-center gap-2">
              <SiPostgresql />
              <sub>SQL</sub>
            </li>
            <li className="flex items-center gap-2">
              <TbBrandMongodb />
              <sub>MongoDB</sub>
            </li>
            <li className="flex items-center gap-2">
              <SiAbletonlive />
              <sub>Ableton</sub>
            </li>
            <li className="flex items-center gap-2">
              <SiBlender />
              <sub>Blender</sub>
            </li>
            <li className="flex items-center gap-2">
              <SiAdobe />
              <sub>Adobe Creative</sub>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default about;
