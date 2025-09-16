import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/mypage" replace />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
