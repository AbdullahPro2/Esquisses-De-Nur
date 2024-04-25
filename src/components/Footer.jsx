import React from 'react';
import Logo from '../assets/Navbar/esquisses-de-nur.svg';
function Footer() {
  return (
    <footer class="bg-pink-100 py-6 text-stone-700">
      <div class=" mx-auto flex flex-col items-center justify-between px-6 md:flex-row">
        <div class="mb-8 md:mb-0">
          <img src={Logo} alt="logo" />
          <br />
          <p class="text-sm">© 2024 Nur Portfolio. All rights reserved.</p>
        </div>

        <nav class="mb-8 md:mb-0">
          <ul class="flex flex-wrap">
            <li class="mb-4 mr-6">
              <a href="#" class="text-gray-700 hover:text-white">
                Home
              </a>
            </li>
            <li class="mb-4 mr-6">
              <a href="#" class="text-gray-700 hover:text-white">
                Portfolio
              </a>
            </li>
            <li class="mb-4 mr-6">
              <a href="#" class="text-gray-700 hover:text-white">
                About
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="text-gray-700 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h3 class="mb-4 text-lg">Follow Me</h3>
          <ul class="flex">
            <li class="mr-4">
              <a href="#" class="text-gray-300 hover:text-white">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="mr-4">
              <a href="#" class="text-gray-300 hover:text-white">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
