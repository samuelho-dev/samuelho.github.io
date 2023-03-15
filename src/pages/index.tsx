import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';
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
      <body className="bg-customGreen">
        <header className="flex justify-between">
          <h1>Samuel Ho</h1>
          <Navbar />
        </header>
        <Main />
        <Footer />
      </body>
    </>
  );
}
