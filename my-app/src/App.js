import React, { useEffect } from "react";
import "./App.scss";
import Home from "./page/Home";
import About from ".";
import Food from "./page/Food";
import Menu from "./page/Menu";
import Footer from "./component/Footer/Footer";
import Sine from "./component/authorSine/Sine";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Header from "./component/Header/Header";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Detail from "./page/Detail/Detail";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
      <Sine />
      <div className="Contact-Us">
        <PhoneForwardedIcon />
        <div className="Contact-Us__icon">
          <DoubleArrowIcon />
        </div>
        <h2>Contact-Us</h2>
      </div>
    </BrowserRouter>
  );
};

export default App;
