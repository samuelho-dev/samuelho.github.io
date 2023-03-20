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
    console.log(entry);
    setDetail(entry);
  };

  const animateDetail = (opacity: number, width: string, height: string) => {
    if (detailRef.current) {
      gsap.to(detailRef.current, {
        duration: 0.5,
        opacity,
        width,
        height,
        ease: 'power2.out',
      });
    }
  };

  const animateContainer = (width: string) => {
    gsap.to(containerRef.current, { duration: 0.7, width, ease: 'power1.out' });
  };

  return (
    <div
      className="mx-30 flex max-h-full rounded-xl bg-customWhite"
      onMouseOver={(e) => {
        animateContainer('65%');
      }}
      onMouseLeave={(e) => {
        setDetail(null);
        animateContainer('80%');
        animateDetail(0, '30%', '0');
      }}
    >
      <div
        ref={containerRef}
        className="flex w-5/6 flex-col gap-6 rounded-xl bg-customOrange p-6 "
      >
        <h1>Previously..</h1>
        {experience.map((entry, i) => (
          <div
            key={i}
            onMouseOver={(e) => {
              handleDetails(e, entry);
              animateContainer('40%');
              animateDetail(1, '100%', 'auto');
            }}
            onClick={(e) => handleDetails(e, entry)}
            className="min-w-2/3 flex justify-between rounded-xl bg-customOrange p-6 outline-dotted hover:outline-double"
          >
            {entry.employer}
            {!detail && <p>{entry.title}</p>}
          </div>
        ))}
      </div>
      {detail && (
        <div
          ref={detailRef}
          className="translate-y-30 h-0 overflow-y-hidden p-6 opacity-0 transition-all duration-200"
        >
          <p>{detail.location}</p>
          <p>{detail.dates}</p>

          {detail.responsibilities.map((el, i) => (
            <div key={i}>
              <p>{el}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WorkHistory;
