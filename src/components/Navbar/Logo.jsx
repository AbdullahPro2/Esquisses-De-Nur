import React from 'react';
import LogoDeSite from '../../assets/Navbar/esquisses-de-nur.svg';
import { NavLink } from 'react-router-dom';
function Logo() {
  return (
    <NavLink to="/EsquissesDeNur/">
      <img src={LogoDeSite} alt="LOGO De Site" className="w-32" />
    </NavLink>
  );
}

export default Logo;
