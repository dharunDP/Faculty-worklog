// appLayout.js

import React, { useState } from "react";
import "./appLayout.css";
import HorizontalNavbar from "../horizontalNavbar/horizontalNavbar";
import VerticalNavbar from "../verticalNavbar/verticalNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nptel from "../../allPages/NPTEL/Nptel";
import OneCredit from "../../allPages/oneCredit/OneCredit";
import FacultyWorklogForm from "../../allPages/Dashboard/FacultyWorklog";
import { Dashboard } from "@mui/icons-material";
import WorkLogPanel from "../../allPages/Dashboard/WorklogPanel/WorkLogPanel.jsx";

function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleVerticalNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeVerticalNavbar = () => {
    setIsMenuOpen(false); // Set isMenuOpen to false to close the vertical navbar
  };

  return (
    <div className="total-app-layout">
      <BrowserRouter>
        <div className="h-navbar">
          <HorizontalNavbar toggleVerticalNavbar={toggleVerticalNavbar} />
        </div>
        <div className="v-nav-and-content">
          <div className={`v-navbar ${isMenuOpen ? "open" : ""}`}>
            <VerticalNavbar onClose={closeVerticalNavbar} />
          </div>
          <div className="content">
            <div className="content-with-margin">
              <Routes>
                <Route path="/" element={<WorkLogPanel />} />
                <Route path="/nptel" element={<Nptel />} />
                <Route path="/onecredit" element={<OneCredit />} />
                <Route path="/facultyworklog" element={<FacultyWorklogForm />} />
                
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default AppLayout;
