import React, { useState } from 'react';
import ListItem from './ListItem';
import menuIcon from '../../assets/Navbar/MenuIcon.png';
import crossIcon from '../../assets/Navbar/CrossIcon.png';
function List() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="">
      {!isOpen && (
        <img
          src={menuIcon}
          alt="Menu Icon"
          className="absolute right-0 top-[30%] z-10 w-10 cursor-pointer xl:hidden"
          onClick={() => setIsOpen((open) => !open)}
        />
      )}
      {isOpen && (
        <img
          src={crossIcon}
          alt="Cross Icon"
          className=" absolute right-0 top-[30%] z-10 w-10 cursor-pointer xl:hidden"
          onClick={() => setIsOpen((open) => !open)}
        />
      )}
      <ul
        className={`absolute right-0 top-0 flex h-screen w-[0px] flex-col items-center justify-center gap-16 overflow-hidden transition-all duration-500 xl:right-6 xl:top-[30%] xl:h-auto xl:w-auto xl:flex-row xl:items-start xl:justify-end  xl:gap-8 xl:bg-transparent xl:px-2 xl:text-lg ${
          isOpen
            ? 'w-[100%] border-l-2  border-white bg-gradient-to-b from-pink-300 via-pink-200 to-pink-100 '
            : ''
        } `}
      >
        <ListItem
          to="/EsquissesDeNur/"
          list="Home"
          onSetIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <ListItem
          to="/EsquissesDeNur/portfolio"
          list="Portfolio"
          onSetIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <ListItem
          to="/EsquissesDeNur/blog"
          list="Blog"
          onSetIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <ListItem
          to="/EsquissesDeNur/about"
          list="About Me"
          onSetIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <ListItem
          to="/EsquissesDeNur/contact"
          list="Contact Me"
          isOpen={isOpen}
          onSetIsOpen={setIsOpen}
        />
      </ul>
    </nav>
  );
}

export default List;
