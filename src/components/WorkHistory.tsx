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
    <section className="flex flex-col justify-center gap-4 py-0 md:py-16">
      <h2 className="text-slate-200">Work History</h2>
      <div className="tileShadow flex flex-col rounded-xl bg-customWhite outline outline-1 md:flex-row">
        <div
          ref={containerRef}
          className="flex w-full flex-col gap-6 rounded-xl bg-customOrange p-4 md:w-1/2 md:p-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold">Previously..</h2>
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
                className={`tileShadow flex cursor-pointer justify-between rounded-xl p-2 text-2xl outline-dotted hover:outline-double md:p-6 ${
                  detail.employer === entry.employer
                    ? 'bg-customBlack outline-double'
                    : 'bg-orange-500'
                }`}
              >
                {entry.employer}
              </h2>
            ))}
          </div>
        </div>
        <div ref={detailRef} className="w-full p-2 md:w-1/2">
          <div className="flex h-24 flex-col items-start justify-between rounded-lg bg-black bg-opacity-10 p-2 md:flex-row md:items-center">
            <div className="flex w-full flex-wrap items-center gap-1">
              <h2 className="font-semibold text-customBlack">{detail.title}</h2>
              <div className="flex cursor-pointer items-center gap-1">
                <h3 className="text-orange-500">@</h3>
                <a href={detail.employer_url} target="_blank">
                  <h3 className="border-b-2 border-transparent font-semibold text-orange-500 transition duration-300 hover:border-orange-500">
                    {detail.employer}
                  </h3>
                </a>
              </div>
            </div>
            <div className="flex w-full items-end justify-between md:flex-col">
              <p className="font-bold text-customBlack">{detail.location}</p>
              <p className="whitespace-nowrap text-xs font-bold tracking-wide text-customBlack">
                {detail.dates}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 p-2">
            {detail.responsibilities.map((el, i) => (
              <p key={i} className="flex items-start justify-start gap-2">
                <span className="h-4 w-4 bg-orange-500">
                  <TbArrowBadgeRight />
                </span>
                <span className="font-mono text-customBlack">{el}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkHistory;
