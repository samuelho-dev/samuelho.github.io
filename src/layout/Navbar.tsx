import { motion, useScroll, useSpring } from 'framer-motion';
import Routes from '../../types/types';
import SomethingWeird from '@/components/SomethingWeird';
import Link from 'next/link';
import NavProgressBar from '@/components/NavProgressBar';
import usePageRefs from 'util/pageRef';

interface NavbarProps {
  handleRoute: Routes['handleRoute'];
  pageRef: React.RefObject<HTMLDivElement>;
  frontpageRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  workRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  beatRef: React.RefObject<HTMLDivElement>;
}

function Navbar({
  handleRoute,
  pageRef,
  frontpageRef,
  aboutRef,
  workRef,
  contactRef,
  beatRef,
}: NavbarProps) {
  return (
    <nav className="fixed top-0 z-50 flex h-fit w-full gap-5 overflow-x-scroll bg-customBlack p-2 md:bg-opacity-10 lg:w-1/6 lg:max-w-[15rem] lg:flex-col lg:gap-4 lg:overflow-x-auto xl:h-full">
      <div className="flex items-center gap-2 lg:flex-col lg:items-start lg:py-16">
        <Link href="/">
          <h3 className="font-extrabold text-customWhite">WELCOME!</h3>
          <p className="whitespace-nowrap font-semibold tracking-tight text-customWhite">
            Take a look around.
          </p>
        </Link>
        <SomethingWeird />
      </div>

      <ul className="flex h-fit w-full gap-4 lg:flex-col">
        <li>
          <a
            href="#about"
            className="relative flex h-16 w-full flex-col justify-between rounded-lg bg-customRed px-2"
          >
            <NavProgressBar itemRef={aboutRef} />
            <p className="text-sm">01</p>
            <h3 className="whitespace-nowrap font-semibold">ABOUT ME</h3>
          </a>
        </li>
        <li>
          <a
            href="#work"
            className="relative flex h-16 w-full flex-col justify-between rounded-lg bg-customRoyalBlue px-2"
          >
            <NavProgressBar itemRef={workRef} />
            <p className="text-sm">02</p>
            <h3 className="whitespace-nowrap font-semibold">WORK</h3>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="relative flex h-16 w-full flex-col justify-between rounded-lg bg-customBlue px-2"
          >
            <NavProgressBar itemRef={contactRef} />
            <p className="text-sm">03</p>
            <h3 className="whitespace-nowrap font-semibold">CONTACT</h3>
          </a>
        </li>
        <li>
          <a
            href="#beat"
            className="relative flex h-16 w-full flex-col justify-between rounded-lg bg-customPurple px-2"
          >
            <NavProgressBar itemRef={beatRef} />
            <p className="text-sm">04</p>
            <h3 className="whitespace-nowrap font-semibold">MAKE A BEAT</h3>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
