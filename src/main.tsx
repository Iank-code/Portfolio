import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js"
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AllProjects = lazy(() => import("./pages/AllProjects.js"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>...</>}>
              <App />
            </Suspense>
          }
        />

        <Route
          path="/all"
          element={
            <Suspense fallback={<>...</>}>
              <AllProjects />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
