import SomethingWeird from '@/components/SomethingWeird';
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
      <div className="flex h-full w-3/4 flex-col place-items-center gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-2 lg:grid lg:max-w-4xl lg:grid-flow-row-dense">
        <div className="col-span-1 row-span-1 flex flex-col justify-center align-middle">
          <div>
            <h3 className="text-white">Welcome!</h3>
            <h1 className="text-white">Take a look around</h1>
          </div>
          <SomethingWeird />
        </div>
        <div
          className="tileShadow col-span-1 row-span-1 flex h-60 w-52 cursor-pointer flex-col items-center justify-center rounded-lg bg-customGreen py-2"
          onClick={() => handleRoute('work')}
        >
          <h5>Work</h5>
          <div className="relative h-full w-full">
            <Image
              src="https://res.cloudinary.com/ddhal4lbv/image/upload/v1681968224/Portfolio/c07062acb1a1053977bd61a5be4e3943_r8e5lu.jpg"
              alt="work jpg"
              fill
              className="object-contain opacity-80"
              loading="lazy"
            />
          </div>
        </div>
        <div className="tileShadow col-span-1 row-span-1 flex h-full w-full rounded-lg bg-customLightPink p-4">
          <div className="relative h-full w-full">
            <Image
              src="https://res.cloudinary.com/ddhal4lbv/image/upload/v1686602915/Portfolio/ezgif.com-optimize_3_buzomn.gif"
              alt="fill jpg"
              fill
              className="flex object-scale-down opacity-80 hover:opacity-100"
              loading="lazy"
            />
          </div>
        </div>
        <div
          className="tileShadow col-span-1 row-span-1 flex h-60 w-5/6 cursor-pointer flex-col items-center justify-center rounded-lg bg-customBlue py-2"
          onClick={() => handleRoute('about')}
        >
          <h5>About Me</h5>
          <div className="relative h-full w-full rounded-lg">
            <Image
              src="https://res.cloudinary.com/ddhal4lbv/image/upload/v1679543020/Portfolio/frame_foxlih.jpg"
              fill
              alt="project jpg"
              className="object-contain opacity-90"
              loading="lazy"
            />
          </div>
        </div>

        <StepSequencer />
      </div>
    </section>
  );
}

export default Home;
