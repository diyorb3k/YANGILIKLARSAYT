// src/routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Hom'; // Home sahifasi
import About from '../pages/About'; // About sahifasi
import Contact from '../pages/Contact'; // Contact sahifasi

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
