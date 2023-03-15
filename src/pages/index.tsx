import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import Main from '@/layout/Main';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Ho</title>
        <meta name="description" content="Samuel Ho" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-customGreen">
        <header className="flex justify-between">
          <h1>Samuel Ho</h1>
          <Navbar />
        </header>
        <Main />
        <Footer />
      </div>
    </>
  );
}
