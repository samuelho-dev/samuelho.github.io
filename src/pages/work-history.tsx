import React, { useState, useRef } from 'react';
import data from '../../util/resume.json';
import { gsap } from 'gsap';

function WorkHistory() {
  const experience = data.workExperience;
  const [detail, setDetail] = useState<null | object>(null);
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
      <div
        className="mx-8 flex w-full rounded-xl bg-customWhite"
        onMouseOver={(e) => {
          animateTitles('90%');
        }}
        onMouseLeave={(e) => {
          // setDetail(null);
          animateTitles('100%');
        }}
      >
        <div
          ref={containerRef}
          className="mr-8 flex flex-col gap-6 rounded-xl bg-customOrange p-6"
        >
          <h1>Previously..</h1>
          {experience.map((entry, i) => (
            <div
              key={i}
              onMouseOver={(e) => {
                animateTitles('80%');
              }}
              onClick={(e) => {
                handleDetails(e, entry);
                animateDescription(1, '100%');
              }}
              className="flex h-full justify-between rounded-xl bg-customOrange p-6 outline-dotted hover:outline-double"
            >
              {entry.employer}
              {!detail && <p>{entry.title}</p>}
            </div>
          ))}
        </div>

        {detail && (
          <div
            ref={detailRef}
            className="overflow-y-hidden p-6 transition-all duration-200"
          >
            <p>{detail.location}</p>
            <p>
              <ins>{detail.dates}</ins>
            </p>
            {detail.responsibilities.map((el, i) => (
              <p key={i}>- {el}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkHistory;
