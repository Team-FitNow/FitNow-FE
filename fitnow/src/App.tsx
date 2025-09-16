
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PDP_ScreenshotMatch from "./pages/PDP";  // PDP 페이지 가져오기

function App() {
  return (
    <Router>
      <Routes>
        {/* 홈 화면 (테스트용) */}
        <Route path="/" element={<div>홈 화면</div>} />

        {/* 상품 상세 페이지 (PDP 페이지, 와이어프레임용) */}
        <Route path="/product/:id" element={<PDP_ScreenshotMatch />} />  {/* 상품 상세 페이지 */}
      </Routes>
    </Router>
  );
}
export default App;
