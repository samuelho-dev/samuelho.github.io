import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/layout/Layout';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import usePageRefs from 'util/pageRef';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const handleRoute = (curPage: string) => {
    router.push(`/${curPage}`, undefined, { shallow: true });
  };

  const { pageRef, frontpageRef, aboutRef, workRef, contactRef, beatRef } =
    usePageRefs();

  return (
    <>
      <Head>
        <title>SAMUEL HO</title>
        <meta name="description" content="SAMUEL HO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Analytics />
      <div className="flex min-h-screen w-full items-center justify-between bg-[#252323] px-0 lg:py-5 lg:px-20">
        <Layout
          handleRoute={handleRoute}
          pageRef={pageRef}
          frontpageRef={frontpageRef}
          workRef={workRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
          beatRef={beatRef}
        >
          <Component
            {...pageProps}
            handleRoute={handleRoute}
            pageRef={pageRef}
            frontpageRef={frontpageRef}
            workRef={workRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
            beatRef={beatRef}
          />
        </Layout>
      </div>
    </>
  );
}
