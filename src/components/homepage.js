import React from "react";
import Register from "./register";
import Login from "./login";
import Pages from "./pages";
import "./homepage.css"; // import CSS file

import { Routes, Route } from "react-router-dom"; // import routing components

function Homepage() {
  // Define function to handle donation button click
  const handleDonationClick = () => {
    alert("+254711610431");
  };

  // Render the homepage component
  return (
    <div>
      <div className="container-lg">
        <p className="fs-4">Welcome ALL...</p>
        {/* Render the donation button */}
        <button className="btn btn-primary" onClick={handleDonationClick}>
          Donate
        </button>
      </div>
      <Routes>
        {/* Define routes for login, register, and pages components */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
    </div>
  );
}

export default Homepage;
