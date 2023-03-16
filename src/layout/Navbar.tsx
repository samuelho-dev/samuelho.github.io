import React from 'react';

function Navbar({ handleRoute }) {
  return (
    <nav className="flex items-center gap-4">
      <h2
        className="cursor-pointer"
        onClick={() => handleRoute('work-history')}
      >
        Work
      </h2>
      <h2 className="cursor-pointer" onClick={() => handleRoute('projects')}>
        Projects
      </h2>
      <div
        className=" flex rounded-full bg-customBlue p-2"
        onClick={() => handleRoute('contact')}
      >
        <h2 className="cursor-pointer">Contact</h2>
      </div>
    </nav>
  );
}

export default Navbar;
