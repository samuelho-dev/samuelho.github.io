import React from 'react';

import Routes from '../../types/types';

interface NavbarProps {
  handleRoute: Routes['handleRoute'];
}

function Navbar({ handleRoute }: NavbarProps) {
  return (
    <nav className="flex items-center gap-4">
      <h2 className="cursor-pointer" onClick={() => handleRoute('work')}>
        Work
      </h2>
      <h2 className="cursor-pointer" onClick={() => handleRoute('about')}>
        About
      </h2>
      <div
        className=" flex rounded-full bg-customBlue py-1 px-2"
        onClick={() => handleRoute('contact')}
      >
        <h2 className="cursor-pointer">Contact</h2>
      </div>
    </nav>
  );
}

export default Navbar;
