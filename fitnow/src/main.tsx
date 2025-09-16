import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/Main/MainPage";
import EmptyPage from "./pages/Main/EmptyPage";
import LoginPage from './pages/LoginPage'
import FindIdPage from './pages/FindIdPage'
import FindIdResultPage from './pages/FindIdResultPage'
import SignupPage from './pages/SignupPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="empty" element={<EmptyPage />} />
          {/*<Route path="/" element={<LoginPage />} />*/}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/find-id" element={<FindIdPage />} />
          <Route path="/find-id-result" element={<FindIdResultPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

