
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import UserAccountDetail from './pages/UserAccountDetail';
import ProductListPage from './pages/ProductListPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './Layout'; // Chúng ta sẽ nói về layout sau
import AuthProvider from './comps/AuthProvider'; // Chúng ta sẽ nói về layout sau
import ProtectedRoute from './ProtectedRoute'; // Bao ve cac URL con, can thoa man dieu kien cua ProtectedRoute

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            {/* Các Route con sẽ được render bên trong Layout */}
            <Route index element={<HomePage />} /> {/* Trang chủ */}
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<LoginPage />} />


            {/* Cac page can phai login moi access vao duoc */}
            <Route element={<ProtectedRoute />}>
                <Route path="users/:userId" element={<UserProfile />} />
                <Route path="users/:userId/:accountName" element={<UserAccountDetail />} />
                <Route path="products/list" element={<ProductListPage />} />
            </Route>



            {/* Route 404 */}
            <Route path="*" element={<NotFoundPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;