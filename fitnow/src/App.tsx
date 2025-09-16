import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Cart from "./pages/cart"; // 🛒 Cart 컴포넌트 불러오기

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>

      {/* 네비게이션 */}
      <nav style={{ margin: "1rem 0" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/cart">Cart</Link>
      </nav>

      {/* 라우터 */}
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
