import React from 'react';
import LogoDeSite from '../../assets/Navbar/esquisses-de-nur.svg';
import { NavLink } from 'react-router-dom';
function Logo() {
  return (
    <NavLink to="/">
      <img src={LogoDeSite} alt="LOGO De Site" className="w-32 lg:w-40" />
    </NavLink>
  );
}

export default Logo;
