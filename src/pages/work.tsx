import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import Projects from '@/components/Projects';
import WorkHistory from '@/components/WorkHistory';

function Work() {
  return (
    <div className="mx-4 flex flex-col items-center gap-12 ">
      <WorkHistory />
      <Projects />
    </div>
  );
}

export default Work;
