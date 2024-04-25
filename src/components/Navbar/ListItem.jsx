import React from 'react';
import { NavLink } from 'react-router-dom';

function ListItem({ to, list, isOpen, onSetIsOpen }) {
  return (
    <NavLink to={to}>
      <li
        className={`hover-underline-animation w-80 justify-center xl:inline   ${
          isOpen ? 'flex' : 'hidden'
        }`}
        onClick={() => onSetIsOpen(false)}
      >
        {list}
      </li>
    </NavLink>
  );
}

export default ListItem;
