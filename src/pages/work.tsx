import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import Projects from '@/components/Projects';
import WorkHistory from '@/components/WorkHistory';

function Work() {
  return (
    <div>
      <WorkHistory />
      <Projects />
    </div>
  );
}

export default Work;
