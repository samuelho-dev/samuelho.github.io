import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Landing from '../components/Landing';

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
      <Landing />
    </animated.div>
  );
}
