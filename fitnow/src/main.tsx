import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import App from "./App";
import MainPage from "./pages/Main/MainPage";
import EmptyPage from "./pages/Main/EmptyPage";
import LoginPage from "./pages/login/LoginPage";
import FindIdPage from "./pages/login/FindIdPage";
import FindIdResultPage from "./pages/login/FindIdResultPage";
import SignupPage from "./pages/login/SignupPage";
import ResetPasswordPage from "./pages/login/ResetPasswordPage";
import { CartPage } from "./cart/CartPage";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="empty" element={<EmptyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/find-id" element={<FindIdPage />} />
            <Route path="/find-id-result" element={<FindIdResultPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
