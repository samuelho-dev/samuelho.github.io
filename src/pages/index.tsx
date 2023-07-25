import SomethingWeird from '@/components/SomethingWeird';
import Image from 'next/image';
import React, { useState } from 'react';
import Routes from '../../types/types';
import StepSequencer from '@/components/StepSequencer';
import About from './about';

interface HomeProps {
  handleRoute: Routes['handleRoute'];
}

function Home({ handleRoute }: HomeProps) {
  return (
    <div className="flex w-full flex-col justify-center">
      <section className="flex h-full  min-h-screen w-full flex-col place-items-center gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-2 lg:grid lg:max-w-4xl lg:grid-flow-row-dense">
        <div className="col-span-1 row-span-1 flex flex-col justify-center align-middle">
          <div>
            <h3 className="text-customWhite">WELCOME!</h3>
            <h1 className="text-customWhite">Take a look around</h1>
          </div>
          <SomethingWeird />
        </div>
        <div
          className="tileShadow col-span-1 row-span-1 flex h-60 w-52 cursor-pointer flex-col items-center justify-center rounded-lg py-1"
          onClick={() => handleRoute('work')}
        >
          <h5 className="absolute z-50 text-4xl font-bold tracking-wider text-customWhite">
            WORK
          </h5>
          <div className="relative h-full w-full">
            <Image
              src="/images/work.jpg"
              alt="work jpg"
              fill
              className="object-contain opacity-80 saturate-150 sepia"
              loading="lazy"
            />
          </div>
        </div>
        <div
          className="tileShadow col-span-1 row-span-1 flex h-60 w-60 cursor-pointer flex-col items-center justify-center rounded-lg p-2"
          onClick={() => handleRoute('about')}
        >
          <h5 className="absolute z-50 text-4xl font-bold tracking-wider text-customWhite">
            ABOUT ME
          </h5>
          <div className="relative h-full w-full rounded-lg">
            <Image
              src="/images/about.jpg"
              fill
              alt="project jpg"
              className="object-contain opacity-90 invert saturate-200 sepia"
              loading="lazy"
            />
          </div>
        </div>
        <div></div>

        <StepSequencer />
      </section>
      <About />
    </div>
  );
}

export default Home;
