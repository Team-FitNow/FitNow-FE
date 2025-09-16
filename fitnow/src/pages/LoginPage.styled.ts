// 1) React / 라이브러리
import styled from "styled-components";

// 2) 절대경로 import

// 3) 상대경로 import (부모 → 자식)

// 4) styled-components 마지막 (현재 파일 자체)

// 모든 색상/간격/반경은 theme 사용 (하드코딩 금지)
export const PageStyled = styled.div`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardStyled = styled.div`
  width: 100%;
  max-width: 420px;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};

  @media (min-width: 640px) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const TitleStyled = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: left;
`;

export const ErrorTextStyled = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0;
  text-align: left;
  min-height: 1.2em;
`;

export const FormStyled = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FieldStyled = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const LabelStyled = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: left;
`;

export const InputStyled = styled.input`
  width: 92%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  outline: none;
  transition: box-shadow 0.15s ease, border-color 0.15s ease;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.inputBg};

  &:focus {
    border-color: ${({ theme }) => theme.colors.focus};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.focusRing};
  }
`;

export const RowStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckboxLabelStyled = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};

  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    accent-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LinkGroupStyled = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textSecondary};

  button {
    background: none;
    border: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }

  .divider {
    color: ${({ theme }) => theme.colors.border};
  }
`;

export const ActionsStyled = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const PrimaryButtonStyled = styled.button<{ $loading?: boolean }>`
  width: 100%;
  height: 36px;
  border: 0;
  border-radius: 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.onPrimary};
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: transform 0.02s ease, opacity 0.2s ease;

  &:active {
    transform: translateY(1px);
  }

  ${({ $loading }) =>
    $loading &&
    `
    opacity: .7;
    cursor: not-allowed;
  `}
`;

export const OutlineButtonStyled = styled.button`
  width: 100%;
  height: 36px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  border-radius: 0;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export const NoticeStyled = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};

  .emph {
    color: ${({ theme }) => theme.colors.danger};
    text-decoration: underline;
    font-weight: 700;
  }
`;
