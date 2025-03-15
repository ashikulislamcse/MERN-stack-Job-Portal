import React from "react";
import Navbar from "./components/ui/Common/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./components/ui/Common/Authentication/Login";
import Register from "./components/ui/Common/Authentication/Register";
import Footer from "./components/ui/Common/Footer";
import Jobs from "./Pages/Jobs";
import Browse from "./Pages/Browse";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
