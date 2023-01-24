import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

export default function Main() {
  return (
    <animated.div
      className='main'
      style={{
        touchAction: 'none',
        width: 1000,
        height: 500,
        borderRadius: 8,
      }}
    >
      <h3>Finance Analyst</h3>
      <h3>March 2019 - December 2019</h3>
    </animated.div>
  );
}
