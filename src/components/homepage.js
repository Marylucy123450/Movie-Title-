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

  {/* Add the footer */}
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          {/* Add the GitHub image with link */}
          <a
            href="https://github.com/Marylucy123450/Movie-Title-Frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./github.png"
              alt="GitHub"
              width="32"
              height="32"
            />
          </a>
        </div>
        <div className="col-sm-6 text-end">
          {/* Add My App */}
          My App
        </div>
      </div>
    </div>
  </footer>
</div>
);
}

export default Homepage;