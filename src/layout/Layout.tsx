import Navbar from '@/layout/Navbar';
import Footer from './Footer';
import Routes from '../../types/types';

interface LayoutProps {
  children: any;
  handleRoute: Routes['handleRoute'];
}

export default function Layout({ children, handleRoute }: LayoutProps) {
  return (
    <>
      <header className="flex w-full justify-between p-2">
        <h1
          onClick={() => handleRoute('')}
          className="cursor-pointer text-4xl tracking-wide text-customWhite"
        >
          Samuel Ho
        </h1>

        <Navbar handleRoute={handleRoute} />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
