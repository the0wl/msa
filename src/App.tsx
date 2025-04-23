import React from 'react'
import { Routes, Route } from 'react-router-dom';
import PageMain from './pages/page-main';
import PageLogin from './pages/page-login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageMain />} />
      <Route path="/login" element={<PageLogin />} />
    </Routes>
  )
}

export default App
