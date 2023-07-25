import Navbar from '@/layout/Navbar';
import Footer from './Footer';
import Routes from '../../types/types';
import SomethingWeird from '@/components/SomethingWeird';

interface LayoutProps {
  children: any;
  handleRoute: Routes['handleRoute'];
}

export default function Layout({ children, handleRoute }: LayoutProps) {
  return (
    <div className="flex flex-col">
      {/* <header className="flex w-full justify-between p-2">
        <h1
          onClick={() => handleRoute('')}
          className="cursor-pointer text-4xl tracking-wide text-customWhite"
        >
          Samuel Ho
        </h1>

        <Navbar handleRoute={handleRoute} />
      </header> */}
      <div className="flex">
        <div className="w-1/6">
          <nav className="fixed w-fit">
            <div className="flex flex-col py-16">
              <div>
                <h3 className="font-extrabold text-customWhite">WELCOME!</h3>
                <p className="font-semibold text-customWhite">
                  Take a look around.
                </p>
              </div>
              <SomethingWeird />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex h-16 w-52 flex-col justify-between rounded-lg bg-customRed px-2">
                <p className="text-sm">01</p>
                <h3 className="font-semibold">ABOUT ME</h3>
              </div>
              <div className="flex h-16 w-52 flex-col justify-between rounded-lg bg-customGreen px-2">
                <p className="text-sm">02</p>
                <h3 className="font-semibold">WORK</h3>
              </div>
              <div className="flex h-16 w-52 flex-col justify-between rounded-lg bg-customBlue px-2">
                <p className="text-sm">03</p>
                <h3 className="font-semibold">CONTACT</h3>
              </div>
              <div className="flex h-16 w-52 flex-col justify-between rounded-lg bg-customPurple px-2">
                <p className="text-sm">04</p>
                <h3 className="font-semibold">MAKE A BEAT</h3>
              </div>
            </div>
          </nav>
        </div>
        <main className="w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
