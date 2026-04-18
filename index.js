import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
  return (
    <div className="main-hero">
      <h1 className="title">The Thinking Cortex</h1>
      <h3 className="subtitle">Thinking Starts Here.</h3>
      <h4 className="soon">Coming Soon</h4>
    </div>
  );
}


const HomeComponent = () => {
  return (
    <TitleComponent />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HomeComponent />);