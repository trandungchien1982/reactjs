// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div style={{ background: "lightcyan", padding: "20px", border: "2px solid blue" }}>
      The main page Layout Cnt
    </div>
  );
}

export default Layout;