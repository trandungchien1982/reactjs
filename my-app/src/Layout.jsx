// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header'; // Giả định có Component Header
import Footer from './Footer'; // Giả định có Component Footer
import AuthProvider from './comps/AuthProvider'; // Giả lập Auth


function Layout() {
  return (
        <div style={{ background: "lightcyan", padding: "20px", border: "2px solid blue" }}>
          <Header />

          <hr />

          <Navbar />
          <div>27.ReactRouter6.Protected.Url - Main Layout</div>
          <h2>TechDebt - Đang có issue do useContext[AuthProvider] không hoạt động như mong muốn trong ProtectedRoute</h2>
          <h2>  nên không check được TH sau khi login thành công xong sẽ vào được trang</h2>
          <div><a target="_blank" href="https://tuyendung.evotek.vn/react-router-6-huong-dan-toan-dien/#Bao_ve_Route_Protected_Routes">https://tuyendung.evotek.vn/react-router-6-huong-dan-toan-dien/#Bao_ve_Route_Protected_Routes</a></div>
          <main>
            {/* Nơi các Route con (HomePage, AboutPage, ContactPage) sẽ được render */}
            <Outlet />
          </main>
          <Footer />
        </div>
  );
}

export default Layout;