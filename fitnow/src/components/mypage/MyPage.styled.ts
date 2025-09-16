import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing["2xl"]};
`;

export const ContentWrapperStyled = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

export const SidebarStyled = styled.aside`
  width: 260px;
  min-width: 260px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md};
  flex-shrink: 0;
`;

export const MainContentStyled = styled.main`
  flex: 1;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background};
  overflow-x: auto;
`;

export const PageTitleStyled = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;
