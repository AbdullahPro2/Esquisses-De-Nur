import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

function Layout() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-pink-200 via-pink-100 to-pink-50">
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
