import React from "react";
import Navbar from "./components/ui/Common/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./components/ui/Common/Authentication/Login";
import Register from "./components/ui/Common/Authentication/Register";
import Footer from "./components/ui/Common/Footer";
import Jobs from "./Pages/Jobs";
import Browse from "./Pages/Browse";
import Profile from "./Pages/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/Admin/Companies";
import CompaniesCreate from "./components/Admin/CompaniesCreate";
import CompaniesSetup from "./components/Admin/CompaniesSetup";
import AdminJobs from "./components/Admin/AdminJobs";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/description/:id" element={<JobDescription />} />

          {/* Admin Path */}
          <Route path="/admin/companies" element={<Companies/>}/>
          <Route path="/admin/companies/create" element={<CompaniesCreate/>}/>
          <Route path="/admin/companies/:id" element={<CompaniesSetup />} />
          <Route path="/admin/jobs" element={<AdminJobs />} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
