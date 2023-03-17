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
    <div className="mx-30 flex rounded-xl bg-customWhite">
      <div
        ref={containerRef}
        onMouseOver={(e) => {
          animateContainer('50%');
          animateDetail(1, '100%');
        }}
        onMouseLeave={() => {
          setDetail(null);
          animateContainer('75%');
          animateDetail(0, '0%');
        }}
        className="flex w-full flex-col gap-6 rounded-xl bg-customOrange p-6 "
      >
        <h1>Previously..</h1>
        {experience.map((entry, i) => (
          <div
            key={i}
            onMouseOver={(e) => handleDetails(e, entry)}
            onClick={(e) => handleDetails(e, entry)}
            className="min-w-2/3 flex justify-between rounded-xl bg-customOrange p-6 outline-dotted hover:outline-double"
          >
            <p>{entry.employer}</p>
            {!detail && <p>{entry.title}</p>}
          </div>
        ))}
      </div>
      <div
        ref={detailRef}
        className="translate-y-30 h-full p-6 opacity-0 transition-all duration-200"
      >
        {detail && (
          <>
            <p>{detail.location}</p>
            <p>{detail.dates}</p>

            {detail.responsibilities.map((el, i) => (
              <div key={i}>
                <p>{el}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default WorkHistory;
