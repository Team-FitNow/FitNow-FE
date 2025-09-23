import styled from "styled-components";

// 장바구니 전체 컨테이너
export const CartContainerStyled = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f9f9f9;
  border-radius: 12px;
`;

// 각 상품 항목 카드
export const CartItemStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

// 상품 이미지
export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
`;

// 상품 정보
export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 14px;
  span {
    font-weight: 500;
  }
`;

// 상품 옵션
export const ProductOption = styled.span`
  color: #666;
  font-size: 13px;
`;

// 수량/삭제 버튼 영역
export const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;

// 버튼
export const CartButtonStyled = styled.button`
  padding: 0.4rem 0.8rem;
  border: none;
  background-color: #e74c3c;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`;

// 수량 조절
export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const QuantityButton = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const QuantityDisplay = styled.div`
  width: 24px;
  text-align: center;
`;

// 총합 + 결제
export const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  margin-top: 1rem;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin-top: 0.5rem;
  background-color: #3498db;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

// 추천 상품 섹션
export const RecommendationContainer = styled.div`
  max-width: 900px;
  margin: 2rem auto;
`;

export const RecommendationTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 1rem;
`;

export const RecommendationList = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
`;

export const RecommendationItem = styled.div`
  min-width: 140px;
  background-color: #fff;
  border-radius: 10px;
  padding: 0.5rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  cursor: pointer;
`;

export const RecommendationImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 0.5rem;
`;
