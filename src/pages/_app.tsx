import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@/layout/Layout';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const handleRoute = (curPage: string) => {
    router.push(`/${curPage}`, undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        <title>SAMUEL HO</title>
        <meta name="description" content="SAMUEL HO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Analytics />
      <div className="flex min-h-screen flex-col justify-between gap-10 bg-[#252323] px-0 lg:py-5 lg:px-28">
        <Layout handleRoute={handleRoute}>
          <Component {...pageProps} handleRoute={handleRoute} />
        </Layout>
      </div>
    </>
  );
}
