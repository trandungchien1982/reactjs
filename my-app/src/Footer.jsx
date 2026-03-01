
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Footer() {
  const navigate = useNavigate(); // Lấy hàm navigate

  const gotoPage = (navUrl) => {
      console.log(" -- Try to go to page: " + navUrl);
      navigate(navUrl);

  };

  // Hàm style để tùy chỉnh active class (v6)
  return (
    <>
        <hr />
        <div style={{ border: "1px solid pink", padding: "20px"}}>
            <div>Footer Cnt</div>
            <div>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
          </div>
          <div>Navigate To Page using code: useNavigate()</div>
          <div>
              <button onClick={ () => gotoPage('/') }>Home</button>
              <button onClick={ () => gotoPage('/about') }>About</button>
              <button onClick={ () => gotoPage('/contact') }>Contact</button>
              <hr />
              <button onClick={ () => gotoPage('/users/UserID_01') }>User 01</button>
              <button onClick={ () => gotoPage('/users/UserID_02') }>User 02</button>
              <button onClick={ () => gotoPage('/users/UserID_03/Account_01') }>User 03|Acc 01</button>
              <hr />
              <button onClick={ () => gotoPage('products/list') }>Product List 01</button>
          </div>
        </div>
    </>
  );
}

export default Footer;