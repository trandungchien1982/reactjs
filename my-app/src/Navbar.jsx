// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // Hàm style để tùy chỉnh active class (v6)
  let activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold"
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Trang Chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Giới Thiệu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            end // Sử dụng 'end' prop để khớp chính xác, tránh /contact/abc vẫn active
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Liên Hệ
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact/not_found"
            end // Sử dụng 'end' prop để khớp chính xác, tránh /contact/abc vẫn active
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            NOT FOUND 1
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact/not_found2"
            end // Sử dụng 'end' prop để khớp chính xác, tránh /contact/abc vẫn active
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            NOT FOUND 2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;