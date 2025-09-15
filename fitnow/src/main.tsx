import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage";
import EmptyPage from "./pages/EmptyPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="empty" element={<EmptyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
