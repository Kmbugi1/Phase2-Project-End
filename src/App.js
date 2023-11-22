
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <div className="route app-container"> 
        <Router>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/menu/:restaurantId" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;