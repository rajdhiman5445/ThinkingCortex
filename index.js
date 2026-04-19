import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/home";

const OnboardingComponent = () => {
  return (
    <div className="main-hero">
      <h1 className="title">The Thinking Cortex</h1>
      <h3 className="subtitle">Thinking Starts Here.</h3>
      <h4 className="soon">Coming Soon</h4>
    </div>
  );
}

const AppLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingComponent />} />
        <Route path="/think" element={<HomeComponent />} > 
          <Route index element={<h2>Welcome to the Home Page</h2>} />
          <Route path="about" element={<h2>About Us</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const HomeComponent = () => {
  return (
    <Home />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
