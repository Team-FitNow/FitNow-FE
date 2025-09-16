import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components"; // Styled-Components 사용
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

const ContentWrap = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
<!--     <BrowserRouter>

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
} -->
    <AppContainer>
      <Header />
      <ContentWrap>
        <Outlet />
      </ContentWrap>
      <Footer />
    </AppContainer>
  );
};

export default App;
