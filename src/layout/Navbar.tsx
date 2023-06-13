import React from 'react';

import Routes from '../../types/types';

interface NavbarProps {
  handleRoute: Routes['handleRoute'];
}

function Navbar({ handleRoute }: NavbarProps) {
  return (
    <nav className="flex items-center gap-4">
      <h2 className="cursor-pointer" onClick={() => handleRoute('work')}>
        WORK
      </h2>
      <h2 className="cursor-pointer" onClick={() => handleRoute('about')}>
        ABOUT
      </h2>
      <div
        className=" flex rounded-full bg-customBlue  px-4 hover:bg-opacity-70"
        onClick={() => handleRoute('contact')}
      >
        <h2 className="cursor-pointer">CONTACT</h2>
      </div>
    </nav>
  );
}

export default Navbar;
