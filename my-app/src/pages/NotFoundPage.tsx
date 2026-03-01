// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFoundPage() {
  // Hàm style để tùy chỉnh active class (v6)
  return (
        <>
          <h1  style={{ color: "red" }}>NOT FOUND Title</h1>
          <div>NotFound Cnt</div>
        </>
  );
}

export default NotFoundPage;