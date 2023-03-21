import React, { useState, useRef } from 'react';
import data from '../../util/resume.json';
import { gsap } from 'gsap';

function WorkHistory() {
  const experience = data.workExperience;
  const [detail, setDetail] = useState<object>(data.workExperience[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleDetails = (e, entry) => {
    e.preventDefault();
    setDetail(entry);
  };

  const animateTitles = (width: string) => {
    gsap.to(containerRef.current, { duration: 0.7, width, ease: 'power1.out' });
  };

  const animateDescription = (opacity: number, width: string) => {
    if (detailRef.current) {
      gsap.to(detailRef.current, {
        duration: 0.2,
        opacity,
        width,
        ease: 'power2.out',
      });
    }
  };

  return (
    <div className="flex h-1/2 items-center justify-center">
      <div className="mx-8 flex w-3/4 rounded-xl bg-customWhite">
        <div
          ref={containerRef}
          className="flex w-1/2 flex-col gap-6 rounded-xl bg-customOrange p-6"
        >
          <h1>Previously..</h1>
          {experience.map((entry, i) => (
            <div
              key={i}
              onClick={(e) => {
                handleDetails(e, entry);
              }}
              className="flex justify-between rounded-xl bg-customOrange p-6 outline-dotted hover:outline-double"
            >
              {entry.employer}
              {!detail && <p>{entry.title}</p>}
            </div>
          ))}
        </div>
        <div ref={detailRef} className="w-1/2 p-6">
          <p>{detail.location}</p>
          <p>
            <ins>{detail.dates}</ins>
          </p>
          {detail.responsibilities.map((el, i) => (
            <p key={i}>- {el}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkHistory;
