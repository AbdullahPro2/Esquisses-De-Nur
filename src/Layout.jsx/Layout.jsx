import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

function Layout() {
  return (
    <div className=" bg-gradient-to-b from-pink-200 via-pink-100 to-pink-50">
      <main className="min-h-screen ">
        <Navbar />
        <div className="overflow-x-hidden">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
