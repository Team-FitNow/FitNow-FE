import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 임시 styled 컴포넌트, 추후 삭제 예정
const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;

const MainPage: React.FC = () => {
  return (
    <MainPageContainer>
      <h2>홈 페이지 🏠</h2>
      <p>
        <Link to="/empty">페이지로 이동 Test</Link>
      </p>
    </MainPageContainer>
  );
};

export default MainPage;
