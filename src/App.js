import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />}></Route>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
        </Routes>
      </Router>
      <Header />
    </div>
  );
}

export default App;
