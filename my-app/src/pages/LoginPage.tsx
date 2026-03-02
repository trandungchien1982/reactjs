// src/components/Navbar.js
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './authSlice'

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo = location.state?.returnTo || "/";

  // Hàm style để tùy chỉnh active class (v6)
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated.value)

  return (
    <>
      <h1>LoginPage Title</h1>
      <div>LoginPage Cnt -- Current login status: {auth.isLogin}, isAuthenticated: {isAuthenticated.toString()}</div>

      {auth.isLogin && (
          <><h1 style={{ color: "magenta" }}>Has Login</h1></>
      )}

      {!auth.isLogin && (
          <><div>Please <button onClick = {() => {
            auth.setLogin();
            console.log(" -- Login success: ...");
            setTimeout(() => {
              console.log(" -- Navigate to the AccessPage: " + returnTo);
              navigate(returnTo, { replace: true });
            }, 2000);
          }}>Login</button></div></>
      )}

    </>
  );
}

export default LoginPage;