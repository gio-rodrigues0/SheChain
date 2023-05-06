import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import LoginPage from "./views/LoginPage/LoginPage";
import LandingPage from "./views/LandingPage/LandingPage";
import SignUpPage from "./views/SignUpPage/SignUpPage";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/signup" element={<SignUpPage />}/>
    </Routes>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();