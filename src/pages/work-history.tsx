import React, { useState, useRef } from 'react';
import data from '../../util/resume.json';
import { gsap } from 'gsap';

function WorkHistory() {
  const experience = data.workExperience;
  const [detail, setDetail] = useState<null | object>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleDetails = (e, i: number) => {
    e.preventDefault();
    console.log(experience[i]);
    setDetail(experience[i]);
  };

  const animateDetail = (opacity: number, width: string) => {
    if (detailRef.current) {
      gsap.to(detailRef.current, {
        duration: 0.2,
        opacity,
        width,
        ease: 'power1.out',
      });
    }
  };

  const animateContainer = (width: string) => {
    gsap.to(containerRef.current, { duration: 0.5, width, ease: 'power1.out' });
  };

  return (
    <div className="mx-36 flex rounded-xl bg-white">
      <div
        ref={containerRef}
        className="flex w-full flex-col gap-6 rounded-xl bg-customOrange p-6 "
      >
        <h1>Previously..</h1>
        {experience.map((entry, i) => (
          <div
            key={i}
            onClick={(e) => handleDetails(e, i)}
            onMouseOver={(e) => {
              handleDetails(e, i);
              animateContainer('25%');
              animateDetail(1, '80%');
            }}
            onMouseLeave={() => {
              setDetail(null);
              animateContainer('75%');
              animateDetail(0, '25%');
            }}
            className="flex justify-between rounded-xl bg-customOrange p-6 outline-dotted hover:outline-double"
          >
            <p>{entry.employer}</p>
            <p>{entry.title}</p>
          </div>
        ))}
      </div>
      {detail && (
        <div
          ref={detailRef}
          className="translate-y-30 h-full p-6 opacity-0 transition-all duration-200"
        >
          <p>{detail.location}</p>
          <p>{detail.dates}</p>
          <p>
            {detail.responsibilities.map((el, i) => (
              <div key={i}>
                <p>{el}</p>
              </div>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default WorkHistory;
