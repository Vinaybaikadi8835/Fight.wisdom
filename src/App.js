import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Ecommerce from "./components/Ecommerce";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        
      </Routes>
    </Router>
  );
}

export default App;
