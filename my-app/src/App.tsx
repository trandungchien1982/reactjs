
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GETPage from './pages/GETPage';
import POSTPage from './pages/POSTPage';
import UserProfile from './pages/UserProfile';
import UserAccountDetail from './pages/UserAccountDetail';
import ProductListPage from './pages/ProductListPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './Layout'; // Chúng ta sẽ nói về layout sau

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* Các Route con sẽ được render bên trong Layout */}
          <Route index element={<HomePage />} /> {/* Trang chủ */}
          <Route path="about" element={<GETPage />} />
          <Route path="contact" element={<POSTPage />} />

          <Route path="users/:userId" element={<UserProfile />} />
          <Route path="users/:userId/:accountName" element={<UserAccountDetail />} />

          <Route path="products/list" element={<ProductListPage />} />

          {/* Route 404 */}
          <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;