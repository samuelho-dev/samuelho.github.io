import Navbar from '@/layout/Navbar';
import Footer from './Footer';

interface Props {
  children: any;
  handleRoute: Function;
}

export default function Layout({ children, handleRoute }: Props) {
  return (
    <>
      <header className="flex justify-between">
        <h1 onClick={() => handleRoute('')} className="cursor-pointer">
          Samuel Ho
        </h1>

        <Navbar handleRoute={handleRoute} />
      </header>
      <main className="mx-48">{children}</main>
      <Footer />
    </>
  );
}
