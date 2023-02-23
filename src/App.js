import React from "react";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import "./App.css";

//components
import Home from "./components/Home";
import Header from "./components/Header";
import Product from "./components/Product";

const App = () => {
  const location = useLocation()

  return (
    <div className="wrapper">
      <Header />
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname} >
          <Route path="/" element={<Home />} />
          <Route path="/nike" element={<Product />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
