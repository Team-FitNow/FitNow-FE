// src/components/Header/styles.ts

import styled from "styled-components";

export const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100%;
  background-color: #fff; /* 배경 흰색 */
  color: #000000;

  font-family: sans-serif;
`;

export const HeaderTop = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 42px;
  font-weight: 800;
  margin: 0;
  white-space: nowrap;
`;

export const LeftNav = styled.ul`
  position: absolute;
  right: 1580px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 15px;
  align-items: center;
`;

export const RightNav = styled.ul`
  position: absolute;
  top: 50%;
  left: 1580px;
  transform: translateY(-50%);
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 15px;
  align-items: center;
`;

export const NavItem = styled.li`
  cursor: pointer;
  white-space: nowrap;
`;

export const HeaderBottom = styled.div`
  border-top: 1px solid #dfdfdfff;
  border-bottom: 1px solid #dfdfdfff;
  padding: 12px 0;
`;

export const CategoryMenu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 78px;
  list-style: none;
  padding: 0 24;
  margin: 0;
  font-size: 15px;
`;

export const HighlightItem = styled(NavItem)`
  color: red;
  font-weight: 500;
`;
