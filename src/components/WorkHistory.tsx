import React, { useState, useRef } from 'react';
import data from '../../util/resume.json';
import { RiFileDownloadLine } from 'react-icons/ri';
import { TbArrowBadgeRight } from 'react-icons/tb';
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
      <div className="tileShadow flex flex-col rounded-xl bg-customWhite outline outline-1 md:flex-row">
        <div
          ref={containerRef}
          className="flex w-full flex-col gap-6 rounded-xl bg-customOrange p-4 md:w-1/2 md:p-6"
        >
          <div className="flex items-center justify-between">
            <h2>Previously..</h2>
            <Link
              href={'/Resume_SamuelHo.docx'}
              download
              className="cursor-pointer"
            >
              <RiFileDownloadLine
                className="h-8 w-6 hover:fill-zinc-800"
                color="white"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {experience.map((entry, i) => (
              <h2
                key={i}
                onClick={(e) => {
                  handleDetails(e, entry);
                }}
                className={`tileShadow flex cursor-pointer justify-between rounded-xl  p-2 outline-dotted hover:outline-double md:p-6 ${
                  detail.employer === entry.employer
                    ? 'bg-customGreen outline-double'
                    : 'bg-orange-400 bg-opacity-50'
                }`}
              >
                {entry.employer}
              </h2>
            ))}
          </div>
        </div>
        <div ref={detailRef} className="w-full p-6 md:w-1/2">
          <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-1">
              <h2 className="text-black">{detail.title}</h2>
              <div className="flex cursor-pointer items-center gap-1">
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
              <p className="whitespace-nowrap py-2 text-xs tracking-wide">
                {detail.dates}
              </p>
            </div>
          </div>
          <div className="flex  flex-col items-center justify-center gap-4 pt-2">
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
