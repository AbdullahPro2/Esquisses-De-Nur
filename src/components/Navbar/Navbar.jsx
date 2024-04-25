import React from 'react';
import Logo from './Logo';
import List from './List';

function Navbar() {
  // FFE4E1
  //   FFF0F5
  return (
    <header className="relative z-40 flex items-center justify-between bg-[#FFE4E1] px-3 py-5 text-sm md:text-base xl:text-lg ">
      <Logo />
      <List />
    </header>
  );
}

export default Navbar;
