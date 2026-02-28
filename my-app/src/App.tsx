
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './comps/Layout'; // Chúng ta sẽ nói về layout sau

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* Các Route con sẽ được render bên trong Layout */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;