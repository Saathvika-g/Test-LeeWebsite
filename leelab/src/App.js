import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import Research from "./components/Research";
import People from "./components/People";
import Publications from "./components/Publications";
import LabUpdates from "./components/LabUpdates";
import Teaching from "./components/Teaching";
import LabResources from "./components/LabResources";
import Contact from "./components/Contact";
import bannerImage from "./images/Lee_lab_banner_TWL.png";

export default function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-dark shadow-sm">
          <div className="container-fluid">
            {/* Left side: Logo + Title */}
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img
                src={bannerImage}
                alt="Lee Lab Banner"
                style={{ height: "55px", marginRight: "10px" }}
              />
              <span className="fw-bold text-light fs-5">Lee Lab</span>
            </Link>

            {/* Toggle button for mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/research">Research</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/people">People</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/publications">Publications</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/lab-updates">Lab Updates</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/teaching">Teaching</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/lab-resources">Lab Resources</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<Research />} />
            <Route path="/people" element={<People />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/lab-updates" element={<LabUpdates />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/lab-resources" element={<LabResources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="text-center py-3 mt-auto border-top border-secondary">
          <p className="mb-1">
            Follow us on Twitter/Bluesky <strong>@snickclunk</strong>
          </p>
          <small>
            © {new Date().getFullYear()} Lee Lab, Department of Biological Sciences, UMass Lowell
          </small>
        </footer>
      </div>
    </Router>
  );
}
