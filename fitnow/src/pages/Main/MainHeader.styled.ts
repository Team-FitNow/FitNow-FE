import styled, { css } from "styled-components";

export const MainHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px 20px 20px;
  border-bottom: 1px solid #eee;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 40px;
  margin-bottom: 24px;
`;

// Link가 활성화되었는지($isActive)와 세일인지($isSale)에 따라 다른 스타일을 적용
export const NavLink = styled.a<{ $isActive?: boolean; $isSale?: boolean }>`
  font-size: 16px;
  color: #333;
  text-decoration: none;
  padding-bottom: 8px;
  cursor: pointer;

  ${(props) =>
    props.$isActive &&
    css`
      border-bottom: 2px solid #000;
      font-weight: bold;
    `}

  ${(props) =>
    props.$isSale &&
    css`
      color: red;
    `}
`;

export const SubNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const BrandTitle = styled.p`
  font-size: 20px;
  margin: 0;
`;

export const CategoryContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const CategoryLink = styled.a<{ $isActive?: boolean }>`
  font-size: 12px;
  color: #555;
  text-decoration: none;
  padding-bottom: 4px;
  cursor: pointer;

  ${(props) =>
    props.$isActive &&
    css`
      border-bottom: 1px solid #000;
      font-weight: 500;
      color: #000;
    `}
`;
