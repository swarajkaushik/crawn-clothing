import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Hats from "./pages/shop/hats.component";
import Jackets from "./pages/shop/jackets.component";
import Mens from "./pages/shop/mens.componenet";
import Womens from "./pages/shop/womens.componenet";
import Sneakers from "./pages/shop/sneakers.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/hats" element={<Hats />} />
        <Route path="/jackets" element={<Jackets />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/sneakers" element={<Sneakers />} />
      </Routes>
    </div>
  );
}

export default App;

//78 completed
