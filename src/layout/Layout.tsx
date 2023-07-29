import Navbar from '@/layout/Navbar';
import Footer from './Footer';
import Routes from '../../types/types';
import React from 'react';

interface LayoutProps {
  children: any;
  handleRoute: Routes['handleRoute'];
  pageRef: React.RefObject<HTMLDivElement>;
  frontpageRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  workRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  beatRef: React.RefObject<HTMLDivElement>;
}

export default function Layout({
  children,
  handleRoute,
  pageRef,
  frontpageRef,
  aboutRef,
  workRef,
  contactRef,
  beatRef,
}: LayoutProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="flex flex-col justify-between pb-5 lg:flex-row">
        <div className="w-full xl:w-1/6">
          <Navbar
            handleRoute={handleRoute}
            pageRef={pageRef}
            frontpageRef={frontpageRef}
            workRef={workRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
            beatRef={beatRef}
          />
        </div>
        <main className="h-full xl:w-5/6">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
