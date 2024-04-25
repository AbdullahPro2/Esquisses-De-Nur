import React from 'react';
import Logo from './Logo';
import List from './List';

function Navbar() {
  // FFE4E1
  // FFF0F5
  // FFF5EE
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-pink-100 px-3 py-5 text-sm shadow-md md:text-base xl:text-lg ">
      <Logo />
      <List />
    </header>
  );
}

export default Navbar;
