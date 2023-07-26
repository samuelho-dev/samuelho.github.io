import Navbar from '@/layout/Navbar';
import Footer from './Footer';
import Routes from '../../types/types';
import SomethingWeird from '@/components/SomethingWeird';
import Link from 'next/link';

interface LayoutProps {
  children: any;
  handleRoute: Routes['handleRoute'];
}

export default function Layout({ children, handleRoute }: LayoutProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      {/* <header className="flex w-full justify-between p-2">
        <h1
          onClick={() => handleRoute('')}
          className="cursor-pointer text-4xl tracking-wide text-customWhite"
        >
          Samuel Ho
        </h1>

        <Navbar handleRoute={handleRoute} />
      </header> */}
      <div className="flex flex-col justify-between pb-5 lg:flex-row">
        <div className="w-full xl:w-1/6">
          <nav className="fixed top-0 z-50 flex h-fit w-full gap-5 overflow-x-scroll bg-customBlack p-2 md:bg-opacity-10 lg:w-1/6 lg:max-w-[15rem] lg:flex-col lg:gap-4 lg:overflow-x-auto xl:h-full">
            <div className="flex items-center gap-2 lg:flex-col lg:items-start lg:py-16">
              <Link href="/">
                <h3 className="font-extrabold text-customWhite">WELCOME!</h3>
                <p className="whitespace-nowrap font-semibold text-customWhite">
                  Take a look around.
                </p>
              </Link>
              <SomethingWeird />
            </div>
            <div className="flex w-full gap-4 lg:flex-col">
              <a
                href="#about"
                className="flex h-16 w-full flex-col justify-between rounded-lg bg-customRed px-2"
              >
                <p className="text-sm">01</p>
                <h3 className="whitespace-nowrap font-semibold">ABOUT ME</h3>
              </a>
              <a
                href="#work"
                className="flex h-16 w-full flex-col justify-between rounded-lg bg-customGreen px-2"
              >
                <p className="text-sm">02</p>
                <h3 className="whitespace-nowrap font-semibold">WORK</h3>
              </a>
              <a
                href="#contact"
                className="flex h-16 w-full flex-col justify-between rounded-lg bg-customBlue px-2"
              >
                <p className="text-sm">03</p>
                <h3 className="whitespace-nowrap font-semibold">CONTACT</h3>
              </a>
              <a
                href="#beat"
                className="flex h-16 w-full flex-col justify-between rounded-lg bg-customPurple px-2"
              >
                <p className="text-sm">04</p>
                <h3 className="whitespace-nowrap font-semibold">MAKE A BEAT</h3>
              </a>
            </div>
          </nav>
        </div>
        <main className="h-full xl:w-5/6">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
