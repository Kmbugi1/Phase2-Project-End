
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======
// import Welcome from "./Welcome";


>>>>>>> 6ace65bdac6b3834de8b9b7a517c248eab2ee306
import Login from "./pages/Login";
import Home from "./components/Home";
import Menu from "./pages/Menu";


function App() {
  return (
    <>
      <div className="route app-container">
        <Router>
          <Routes>
<<<<<<< HEAD
          <Route path="*" element={<Login />} />
=======
            {/* <Route path="/" element={<Welcome />} /> */}
>>>>>>> 6ace65bdac6b3834de8b9b7a517c248eab2ee306
            <Route path="/menu/:restaurantId" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
<<<<<<< HEAD
            
=======
            {/* <Route path="/Welcome" element={<Welcome />} /> */}

>>>>>>> 6ace65bdac6b3834de8b9b7a517c248eab2ee306
          </Routes>
        </Router>
        
        
      </div>
    </>
  );
}

export default App;