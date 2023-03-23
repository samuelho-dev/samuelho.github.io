import Game from '@/components/Game';
import SomethingWeird from '@/components/SomethingWeird';
import Canvas from '@/game/Canvas';

import Image from 'next/image';
import React, { useState } from 'react';
import Routes from '../../types/types';
import StepSequencer from '@/components/StepSequencer';

interface HomeProps {
  handleRoute: Routes['handleRoute'];
}

function Home({ handleRoute }: HomeProps) {
  const [gameModal, setGameModal] = useState(false);

  const handleGameModal = () => {
    setGameModal(!gameModal);
  };
  return (
    <section className="flex w-full justify-center">
      <div className="flex h-full w-3/4 flex-col place-items-center gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-2 lg:grid lg:max-w-7xl lg:grid-flow-row-dense">
        <div className="col-span-1 row-span-1 flex flex-col justify-center  align-middle">
          <div>
            <h3 className="text-white">Welcome!</h3>
            <h1 className="text-white">Take a look around</h1>
          </div>
          <SomethingWeird />
        </div>
        <div
          className="col-span-1 row-span-1 my-0 flex h-full w-full cursor-pointer flex-col items-center justify-center bg-customOrange py-2 lg:my-12 lg:h-3/4 lg:w-3/4"
          onClick={() => handleRoute('work')}
        >
          <h5>Work</h5>
          <div className="relative h-40 w-full lg:h-full">
            <Image
              src="https://res.cloudinary.com/ddhal4lbv/image/upload/v1679542756/Portfolio/color_lenoau.jpg"
              alt="work jpg"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className=" col-span-1 row-span-1 flex h-full w-full flex-col items-center bg-customLightPink">
          <h5>Game</h5>
          <Game handleGameModal={handleGameModal} gameModal={gameModal} />
        </div>
        <div
          className="col-span-1 row-span-1 flex h-60 w-full cursor-pointer flex-col items-center justify-center bg-customBlue px-10 py-5 lg:h-full lg:w-3/4"
          onClick={() => handleRoute('about')}
        >
          <h5>About Me</h5>
          <div className="relative h-full w-full">
            <Image
              src="https://res.cloudinary.com/ddhal4lbv/image/upload/v1679543020/Portfolio/frame_foxlih.jpg"
              fill
              alt="project jpg"
              className="object-contain"
            />
          </div>
        </div>
        <div className="col-span-2 row-span-2 my-2 h-full w-full items-center justify-center bg-customYellow px-4">
          <h2>Make A Beat!</h2>
          <StepSequencer />
        </div>

        {gameModal && (
          <Canvas handleGameModal={handleGameModal} gameModal={gameModal} />
        )}
      </div>
    </section>
  );
}

export default Home;
