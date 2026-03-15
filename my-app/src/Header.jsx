
import React from 'react';
import { NavLink } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Header() {
  // Hàm style để tùy chỉnh active class (v6)
  return (
    <>
        <hr />
        <div style={{ border: "5px solid lightgreen", padding: "20px"}}>
            <div>FETCH HEADER Cnt</div>
            <div>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
          </div>
        </div>
    </>
  );
}

export default Header;