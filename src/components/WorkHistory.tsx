import React, { useState, useRef } from 'react';
import data from '../../util/resume.json';
import { RiFileDownloadLine } from 'react-icons/ri';
import { TbArrowBadgeRight } from 'react-icons/tb';
import { gsap } from 'gsap';
import Link from 'next/link';
import { Experience } from '../../types/types';
function WorkHistory() {
  const experience = data.workExperience;
  const [detail, setDetail] = useState<Experience>(data.workExperience[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  const handleDetails = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>,
    entry: Experience,
  ) => {
    e.preventDefault();
    setDetail(entry);
  };

  return (
    <section className="flex h-1/2 max-w-5xl flex-col justify-center gap-4 py-0 md:py-16">
      <h2 className="text-slate-200">Work History</h2>
      <div className=" flex flex-col rounded-xl bg-customWhite md:flex-row">
        <div
          ref={containerRef}
          className="flex w-full flex-col gap-6 rounded-xl bg-customOrange p-4 md:w-1/2 md:p-6"
        >
          <div className="flex items-center justify-between">
            <h1>Previously..</h1>
            <Link
              href={'/Resume_SamuelHo.pdf'}
              download
              className="cursor-pointer"
            >
              <RiFileDownloadLine className="h-8 w-6" color="white" />
            </Link>
          </div>
          <div className="flex flex-row gap-4 md:flex-col">
            {experience.map((entry, i) => (
              <h2
                key={i}
                onClick={(e) => {
                  handleDetails(e, entry);
                }}
                className="flex cursor-pointer justify-between rounded-xl bg-customOrange p-2 outline-dotted hover:outline-double md:p-6"
              >
                {entry.employer}
              </h2>
            ))}
          </div>
        </div>
        <div ref={detailRef} className="w-full p-6 md:w-1/2">
          <div className="flex flex-col items-start justify-between md:flex-row">
            <div className="flex flex-wrap gap-1 ">
              <h3 className="text-black">{detail.title}</h3>
              <div className="flex cursor-pointer gap-1 ">
                <h3 className="text-customBlue">@</h3>
                <a href={detail.employer_url} target="_blank">
                  <h3 className="border-b-2 border-transparent text-customBlue transition duration-300 hover:border-customBlue">
                    {detail.employer}
                  </h3>
                </a>
              </div>
            </div>
            <div className="flex w-full items-center justify-between md:w-fit md:flex-col  ">
              <p>{detail.location}</p>
              <sub className="tracking-wide">{detail.dates}</sub>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            {detail.responsibilities.map((el, i) => (
              <p key={i} className="flex items-start">
                <span className="h-4 w-4 py-2 text-slate-700">
                  <TbArrowBadgeRight />
                </span>
                <span className="text-slate-700">{el}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkHistory;
