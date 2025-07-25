import axios from "axios";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Services from "./Components/Services";

const App = () => {
  return (
    <div>
        <nav className="flex font-bold gap-5 cursor-pointer p-10 justify-center">
            <Link to="/">Home</Link>
            <Link to="/Product">Product</Link>
            <Link to="/Services">Services</Link>
        </nav>
        <hr className="h-3 w-full" />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Services" element={<Services />} />
        </Routes>
    </div>
  );
};

export default App;
