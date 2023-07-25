import React from 'react';

import Routes from '../../types/types';

interface NavbarProps {
  handleRoute: Routes['handleRoute'];
}

function Navbar({ handleRoute }: NavbarProps) {
  return (
    <nav className="flex flex-col items-end">
      <h2
        className="cursor-pointer text-customWhite"
        onClick={() => handleRoute('work')}
      >
        WORK
      </h2>
      <h2
        className="cursor-pointer text-customWhite"
        onClick={() => handleRoute('about')}
      >
        ABOUT
      </h2>
      <div
        className=" flex rounded-full hover:bg-opacity-70"
        onClick={() => handleRoute('contact')}
      >
        <h2 className="cursor-pointer text-customWhite">CONTACT</h2>
      </div>
    </nav>
  );
}

export default Navbar;
