import React from 'react';

function Navbar({ handleRoute }) {
  return (
    <nav className="flex">
      <h1 onClick={() => handleRoute('work-history')}>Work</h1>
      <h1 onClick={() => handleRoute('projects')}>Projects</h1>
      <div onClick={() => handleRoute('contact')}>
        <h1>Contact</h1>
      </div>
    </nav>
  );
}

export default Navbar;
