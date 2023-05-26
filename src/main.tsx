import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import AllProjects from "./pages/AllProjects.js";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/all" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
