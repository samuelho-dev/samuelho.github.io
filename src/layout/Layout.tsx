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
      <div className="flex flex-col pb-5 md:flex-row">
        <div className="w-1/6">
          <nav className="fixed top-0 z-50 flex w-full gap-5 overflow-x-scroll bg-customBlack bg-opacity-90 p-2 md:w-fit md:flex-col md:gap-4 md:overflow-x-auto md:bg-none">
            <div className="flex items-center gap-2 md:flex-col md:items-start md:py-16">
              <Link href="/">
                <h3 className="font-extrabold text-customWhite">WELCOME!</h3>
                <p className="whitespace-nowrap font-semibold text-customWhite">
                  Take a look around.
                </p>
              </Link>
              <SomethingWeird />
            </div>
            <div className="flex gap-4 md:flex-col">
              <a
                href="#about"
                className="flex h-16 w-52 flex-col justify-between rounded-lg bg-customRed px-2"
              >
                <p className="text-sm">01</p>
                <h3 className="font-semibold">ABOUT ME</h3>
              </a>
              <a
                href="#work"
                className="flex h-16 w-52 flex-col justify-between rounded-lg bg-customGreen px-2"
              >
                <p className="text-sm">02</p>
                <h3 className="font-semibold">WORK</h3>
              </a>
              <a
                href="#contact"
                className="flex h-16 w-52 flex-col justify-between rounded-lg bg-customBlue px-2"
              >
                <p className="text-sm">03</p>
                <h3 className="font-semibold">CONTACT</h3>
              </a>
              <a
                href="#beat"
                className="flex h-16 w-52 flex-col justify-between rounded-lg bg-customPurple px-2"
              >
                <p className="text-sm">04</p>
                <h3 className="font-semibold">MAKE A BEAT</h3>
              </a>
            </div>
          </nav>
        </div>
        <main className="h-full w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
