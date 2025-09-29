import styled from "styled-components";

/* ---------- 컨테이너 ---------- */
export const ContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 ${({ theme }) => theme.spacing.md} 140px;
  background: ${({ theme }) => theme.colors.surface}; /* 배경 연한 회색 제거 → 흰색 */
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ui-sans-serif, system-ui, -apple-system, "Noto Sans KR", Roboto, Helvetica, Arial, sans-serif;
`;

/* ---------- 상단 타이틀 & 탭 ---------- */
export const HeaderStyled = styled.header`
  padding: ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.surface};
`;

export const TitleStyled = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  font-size: 1.5rem;   /* 더 작게 */
  font-weight: 20;    /* 덜 두껍게 */
  letter-spacing: -0.02em;
`;

export const TabsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border}; /* 옅은 경계 */
`;

/* 탭 아이템: 활성 시 텍스트 색만 진하게 */
export const TabItemStyled = styled.button<{ $active?: boolean }>`
  position: relative;
  background: transparent;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  cursor: pointer;

  display: grid;
  justify-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  .count {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  .label {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme, $active }) =>
      $active ? theme.colors.textPrimary : theme.colors.textSecondary};
  }
`;

/* 탭 하단 슬라이딩 하이라이터 (F!t Now 배송 ↔ 브랜드 배송) */
export const TabsIndicatorStyled = styled.div<{ $index: 0 | 1 }>`
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 2px;
  width: 50%;
  background: ${({ theme }) => theme.colors.textPrimary};
  transform: translateX(${({ $index }) => ($index === 0 ? "0%" : "100%")});
  transition: transform 200ms ease;
`;

/* ---------- 빈 장바구니 밴드 ---------- */
export const EmptyBandStyled = styled.section`
  margin-top: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.hover};
  border-radius: 0;
  padding: 64px 0;
  text-align: center;

  .msg {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  .cta {
    display: inline-block;
    padding: 10px 16px;
    border: 1px solid ${({ theme }) => theme.colors.textPrimary};
    border-radius: 0;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: background 160ms ease, color 160ms ease, box-shadow 160ms ease;

    &:hover {
      background: ${({ theme }) => theme.colors.textPrimary};
      color: ${({ theme }) => theme.colors.onPrimary};
    }
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px ${({ theme }) => theme.focusRing};
    }
    &:active {
      transform: translateY(0.5px);
      opacity: 0.95;
    }
  }
`;

/* ---------- 리스트 & 카드 ---------- */
export const ListStyled = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

export const ItemCardStyled = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border}; /* 옅은 경계 */
  border-radius: 0;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const ThumbStyled = styled.img`
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ItemMetaStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-width: 0;

  .brand {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  .name {
    margin-top: 2px;
    font-weight: 300;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .sub {
    margin-top: 2px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  .limited {
    display: inline-block;
    margin-top: 4px;
    padding: 2px 6px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0;
    font-size: ${({ theme }) => theme.fontSizes.xs || "0.8rem"};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const RowStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QtyControlStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  button {
    width: 28px;
    height: 28px;
    border-radius: 0;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  .qty {
    width: 28px;
    text-align: center;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const PriceBoxStyled = styled.div`
  text-align: right;
  .price {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  .fee {
    margin-top: 2px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

/* ---------- 쿠폰 / 배송 / 합계 ---------- */
export const SectionStyled = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const CouponBoxStyled = styled.div`
  display: grid;
  gap: 10px;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0;
  background: ${({ theme }) => theme.colors.surface};

  .row {
    display: flex;
    gap: ${({ theme }) => theme.spacing.xs};
  }
  input {
    flex: 1;
    height: 40px;
    padding: 0 ${({ theme }) => theme.spacing.sm};
    border-radius: 0;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.inputBg};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  button {
    height: 40px;
    padding: 0 ${({ theme }) => theme.spacing.sm};
    border-radius: 0;
    border: 1px solid ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  .hint {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  .error {
    color: ${({ theme }) => theme.colors.danger};
  }
`;

export const ShippingBoxStyled = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0;
  background: ${({ theme }) => theme.colors.surface};
`;

export const RadioStyled = styled.label<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.hover : theme.colors.surface};
  cursor: pointer;

  input {
    accent-color: ${({ theme }) => theme.colors.primary};
  }
  .desc {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const SummaryCardStyled = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0;
  background: ${({ theme }) => theme.colors.surface};

  .line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 800;
    font-size: ${({ theme }) => theme.fontSizes.lg || "1.1rem"};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  hr {
    border: none;
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
    margin: 6px 0;
  }
`;

export const AgreeBoxStyled = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0;
  background: ${({ theme }) => theme.colors.surface};

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: ${({ theme }) => theme.colors.primary};
  }
  .text {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  .link {
    background: transparent;
    border: none;
    padding: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: underline;
    cursor: pointer;
  }  
  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: underline;
  }
`;

/* ---------- 스티키 바 ---------- */
export const StickyBarStyled = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};

  .inner {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    gap: ${({ theme }) => theme.spacing.xs};
    align-items: center;
  }
  .info .label {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  .info .value {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.lg || "1.1rem"};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  button {
    border-radius: 0;
    padding: 10px 16px;
    border: 1px solid ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  .primary {
    background: ${({ theme }) => theme.colors.textPrimary};
    color: ${({ theme }) => theme.colors.onPrimary};
    border: none;
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/* ---------- 버튼/인풋/체크박스 ---------- */
export const ButtonStyled = styled.button`
  padding: 10px 14px;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.hover};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.15);
  }
`;

export const InputStyled = styled.input`
  height: 40px;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.15);
  }
`;

export const CheckboxStyled = styled.input.attrs({ type: "checkbox" })``;

/* ---------- 추천 상품 섹션 ---------- */
export const RecoSectionStyled = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const RecoHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.lg || "1.1rem"};
    font-weight: 500;
  }
  button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    cursor: pointer;
  }
`;

export const RecoGridStyled = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: -100px) {
    /* 데스크톱에서 정확히 4개 카드가 양끝에 딱 맞게 */
    grid-template-columns: repeat(4, 1fr);
  }
`;



export const RecoThumbWrapStyled = styled.div`
  width: 100%;
  /* 고정된 썸네일 높이로 카드 크기 축소 */
  height: 200px;
  overflow: hidden;
  border-radius: 0;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;

  img {
    transition: transform 250ms ease;
    will-change: transform;
  }
  @media (min-width: 768px) {
    height: 220px;
  }
  @media (min-width: 1024px) {
    height: 240px;
  }
`;

export const RecoThumbStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #ffffff;
  padding: 6px;
`;

export const RecoCardStyled = styled.div`
  position: relative;
  background: #ffffff; /* 카드 뒷배경 흰색 고정 */
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  overflow: hidden;
  /* 이미지가 카드 너비와 동일하게 */
  padding: 0;
  display: grid;
  gap: 0;
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    border-color 160ms ease,
    background-color 160ms ease;
  will-change: transform;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      border-color: ${({ theme }) => theme.colors.textPrimary};
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    &:hover ${/* sc-selector */ RecoThumbWrapStyled} img {
      transform: scale(1.03);
    }
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.textPrimary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.focusRing};
  }
`;

export const RecoMetaStyled = styled.div`
  /* 가로 패딩 제거 → 텍스트 블록 폭을 이미지와 동일하게 */
  padding: ${({ theme }) => theme.spacing.xs} 0;
  .brand {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  .name {
    font-weight: 500;
    line-height: 1.3;
    /* 두 줄까지만 표시하고 말줄임 */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: calc(1.3em * 2);
  }
`;

export const RecoPriceRowStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* 가로 패딩 제거 → 가격 라인도 이미지 폭과 동일 */
  padding: 0 0 ${({ theme }) => theme.spacing.xs};

  .price {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const DividerStyled = styled.hr`
  border: none;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

/* ---------- 추가: BadgeStyled & EmptyStyled ---------- */
export const BadgeStyled = styled.span`
  padding: 2px 8px;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.badgeBg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-left: ${({ theme }) => theme.spacing.xs};
`;

export const EmptyStyled = styled.div`
  display: grid;
  place-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 48px ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0;
  text-align: center;

  .title {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  .desc {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

/* ---------- 환불 정책 모달 ---------- */
export const ModalOverlayStyled = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
`;

export const ModalContentStyled = styled.div`
  width: min(720px, calc(100% - 32px));
  max-height: calc(100vh - 120px);
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  overflow: hidden;
`;

export const ModalHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.lg || "1.1rem"};
    font-weight: 500;
    letter-spacing: -0.01em;
  }
`;

export const ModalBodyStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  overflow: auto;

  h4 {
    margin: 0 0 ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 500;
  }
  p, li {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }
  ul {
    margin: ${({ theme }) => theme.spacing.sm} 0;
    padding-left: 1.1rem;
  }
`;

export const ModalFooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

export const ModalCloseButtonStyled = styled.button`
  padding: 10px 14px;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.focusRing};
  }
`;
