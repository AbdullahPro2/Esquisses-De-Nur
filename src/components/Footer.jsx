import React from 'react';
import Logo from '../assets/Navbar/esquisses-de-nur.svg';
import facebook from '../assets/Footer/facebook.png';
import instagram from '../assets/Footer/instagram.png';
import twitter from '../assets/Footer/twitter.png';
import pinterest from '../assets/Footer/pinterest.png';
function Footer() {
  return (
    <footer className="bg-pink-100 py-6 text-stone-700">
      <div className="mx-auto flex flex-col items-center justify-between px-6 lg:flex-row lg:items-center lg:justify-between">
        <img src={Logo} alt="logo" />
        <div className="mt-5">
          <a href="https://github.com/AbdullahPro2" target="_blank">
            <h3 className="mb-4 text-center text-lg">Follow Me</h3>
          </a>
          <ul className="flex">
            <li className="mr-4">
              <a href="#">
                <img src={facebook} alt="footer icons" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#">
                <img src={instagram} alt="footer icons" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#">
                <img src={twitter} alt="footer icons" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#">
                <img src={pinterest} alt="footer icons" />
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-auto mt-4 flex h-[2px] w-[80%] bg-stone-800 lg:hidden "></div>
        <div className="mt-5">
          <br />
          <p className="text-center text-sm">
            Esquisses De Nur Portfolio © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
