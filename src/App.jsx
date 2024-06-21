import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Blogs from "./components/pages/Blogs";
import CandidatePage from "./components/pages/Candidate";
import CandidateDetail from "./components/pages/CandidateDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/candidates" element={<CandidatePage />} />
        <Route path="/candidates/:candidateId" element={<CandidateDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
