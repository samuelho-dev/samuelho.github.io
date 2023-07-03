import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { TbBrandMongodb } from 'react-icons/tb';
import { IoLogoNodejs } from 'react-icons/io';
import { FaAws } from 'react-icons/fa';
import {
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiAbletonlive,
  SiBlender,
  SiAdobe,
  SiReact,
  SiPython,
  SiFastapi,
} from 'react-icons/si';

function about() {
  return (
    <section className="flex flex-col items-center justify-center px-2">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-4 md:w-3/4 md:flex-row">
        <div className="w-fit bg-customLightPink hover:bg-none">
          <div className="mix-blend-darken grayscale filter hover:filter-none">
            <Image
              src="https://res.cloudinary.com/ddhal4lbv/image/upload/v1679961213/Portfolio/525F8B4C-5303-4E2E-B816-A605BB0455A7_1_105_c_ordpsi.jpg"
              height={100}
              width={300}
              alt="profile"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col px-2 tracking-wide text-white md:w-1/2">
          <p>
            Hey! My name is Samuel and I am a software developer passionate
            about creating impactful products and solving business problems. I
            graduated from UC Santa Barbara in 2018 with a B.A. in Economics,
            and my previous roles were in corporate lending and FP&A. Having
            worked in cross functional and quantitative roles and also having a
            passion for the arts, I find that I draw from many diciplines. On my
            free time, I dabble music production, audio engineering and most
            recently 3d modeling. I also host a regular meetup group every
            weekend for music producers in LA.
            <br></br>
            <br></br>
            If you would like to check out some of my projects check out my{' '}
            <a
              href="https://github.com/samuelho-dev"
              target="_blank"
              className="hover:border-customYtext-customYellow border-b-2 border-transparent text-customYellow transition duration-300"
            >
              github
            </a>
            , and if you are a recruiter click{' '}
            <Link
              href={'/Resume_SamuelHo.docx'}
              className="hover:border-customYtext-customYellow border-b-2 border-transparent text-customYellow transition duration-300"
              download={'/Resume_SamuelHo.docx'}
            >
              here
            </Link>{' '}
            for my resume or you can reach me through my{' '}
            <a
              href="https://samuelho.space/contact"
              target="_blank"
              className="hover:border-customYtext-customYellow border-b-2 border-transparent text-customYellow transition duration-300"
            >
              contact form
            </a>{' '}
            or at <ins>samuelho343@gmail.com</ins>.<br></br>
          </p>
          <p>Some technologies I have been working with:</p>
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
              <FaAws />
              <sub>AWS</sub>
            </li>
            <li className="flex items-center gap-2">
              <SiReact />
              <sub>React</sub>
            </li>
            <li className="flex items-center gap-2">
              <IoLogoNodejs />
              <sub>Node</sub>
            </li>
            <li className="flex items-center gap-2">
              <SiPostgresql />
              <sub>PostgreSQL</sub>
            </li>
            <li className="flex items-center gap-2">
              <TbBrandMongodb />
              <sub>MongoDB</sub>
            </li>
            <li className="flex items-center gap-2">
              <SiPython />
              <sub>Python</sub>
            </li>
            <li className="flex items-center gap-2">
              <SiFastapi />
              <sub>Fast API</sub>
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
