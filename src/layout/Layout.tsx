import Navbar from '@/layout/Navbar';
import Footer from './Footer';

export default function Layout({ children, handleRoute }) {
  return (
    <>
      <header className="flex justify-between">
        <h1 onClick={() => handleRoute('')}>Samuel Ho</h1>

        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
