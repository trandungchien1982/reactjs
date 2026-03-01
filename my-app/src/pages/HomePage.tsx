// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function HomePage() {
  // Hàm style để tùy chỉnh active class (v6)
  return (
        <>
          <h1 style={{ color: "green" }}>HOMEPAGE Title</h1>
          <div>HomePage Cnt</div>
        </>
  );
}

export default HomePage;