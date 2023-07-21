import SomethingWeird from '@/components/SomethingWeird';
import Image from 'next/image';
import React, { useState } from 'react';
import Routes from '../../types/types';
import StepSequencer from '@/components/StepSequencer';

interface HomeProps {
  handleRoute: Routes['handleRoute'];
}

function Home({ handleRoute }: HomeProps) {
  return (
    <section className="flex w-full justify-center">
      <div className="flex h-full w-3/4 flex-col place-items-center gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-2 lg:grid lg:max-w-4xl lg:grid-flow-row-dense">
        <div className="col-span-1 row-span-1 flex flex-col justify-center align-middle">
          <div>
            <h3 className="text-white">WELCOME!</h3>
            <h1 className="text-white">Take a look around</h1>
          </div>
          <SomethingWeird />
        </div>
        <div
          className="tileShadow col-span-1 row-span-1 flex h-60 w-52 cursor-pointer flex-col items-center justify-center rounded-lg bg-customGreen p-2"
          onClick={() => handleRoute('work')}
        >
          <h5 className="absolute z-50 -translate-y-10 text-4xl font-bold tracking-wider">
            WORK
          </h5>
          <div className="relative h-full w-full">
            <Image
              src="/images/work.jpg"
              alt="work jpg"
              fill
              className="object-contain opacity-80"
              loading="lazy"
            />
          </div>
        </div>
        <div
          className="tileShadow col-span-1 row-span-1 flex h-60 w-60 cursor-pointer flex-col items-center justify-center rounded-lg bg-customBlue p-2"
          onClick={() => handleRoute('about')}
        >
          <h5 className="absolute z-50 text-4xl font-bold tracking-wider text-black">
            ABOUT ME
          </h5>
          <div className="relative h-full w-full rounded-lg">
            <Image
              src="/images/about.jpg"
              fill
              alt="project jpg"
              className="object-contain opacity-90"
              loading="lazy"
            />
          </div>
        </div>
        <div></div>

        <StepSequencer />
      </div>
    </section>
  );
}

export default Home;
