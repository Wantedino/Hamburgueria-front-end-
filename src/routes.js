import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Home';
import Orders from './Order';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/orders" element={<Orders />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
