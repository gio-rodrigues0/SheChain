import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import LoginPage from "./views/LoginPage/LoginPage";
import LandingPage from "./views/LandingPage/LandingPage";
import SignUpPage from "./views/SignUpPage/SignUpPage";
import HomePage from "./views/HomePage/HomePage";
import MetamaskPage from "./views/MetamaskPage/MetamaskPage";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/signup" element={<SignUpPage />}/>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/metamask" element={<MetamaskPage />}/>
    </Routes>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();