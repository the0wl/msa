import React from "react";
import { Route, Routes } from "react-router-dom";
import PageLogin from "./pages/page-login";
import PageMain from "./pages/page-main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageMain />} />
      <Route path="/login" element={<PageLogin />} />
    </Routes>
  );
}

export default App;
