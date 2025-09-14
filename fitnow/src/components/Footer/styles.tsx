// src/components/Footer/styles.ts

import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  background-color: #ffffff;
  color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid #ddd;
  z-index: 999;

  padding: 12px 16px;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 13px;
  margin: 0;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const FooterLinks = styled.p`
  font-size: 11px;
  font-weight: 300;
  margin: 4px 0 0;
  line-height: 1.5;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;
