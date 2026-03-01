// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header'; // Giả định có Component Footer
import Footer from './Footer'; // Giả định có Component Footer



function Layout() {
  return (
    <div style={{ background: "lightcyan", padding: "20px", border: "2px solid blue" }}>
      <Header />

      <hr />

      <Navbar />
      <div>The main page Layout Cnt</div>
      <main>
        {/* Nơi các Route con (HomePage, AboutPage, ContactPage) sẽ được render */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;