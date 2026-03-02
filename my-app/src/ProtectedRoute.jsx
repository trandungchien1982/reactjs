import React, { useContext } from 'react';
import { Navigate, Outlet, NavLink, useLocation } from 'react-router-dom';
import AuthContext from './comps/AuthContext'

// Giả định bạn có một hook hoặc context để kiểm tra trạng thái đăng nhập
function ProtectedRoute({ children }) {
  const location = useLocation();
  const { hasLogin, setLogin } = useContext(AuthContext); // Lấy trạng thái đăng nhập thực tế
  //const isAuthenticated = auth.hasLogin; // Thay thế bằng logic kiểm tra đăng nhập thật
  console.log(" -- isAuthenticated in ProtectedRoute: " + hasLogin);

  if (!hasLogin) {
    const returnTo = location.pathname + location.search + location.hash; // ✅ cloneable string
    // Nếu chưa đăng nhập, chuyển hướng về trang login
    // state={{ from: location }} giúp sau khi login thành công có thể quay lại trang cũ
    return <Navigate to="/login" state={{ returnTo }} replace />;
  }

  // Nếu đã đăng nhập, render nội dung của route con
  // return children ? children : <Outlet />; // Render children nếu được truyền vào, hoặc Outlet
  return <Outlet />; // Hoặc chỉ cần dùng Outlet nếu dùng nested route
}

export default ProtectedRoute;