import styled, { css } from "styled-components";

/* ── Palette ─────────────────────────────────────────────────────────── */
const INK = "#111827";
const INK_SUB = "#374151";
const MUTED = "#6B7280";
const MUTED_LIGHT = "#9CA3AF";
const LINE = "#D1D5DB";
const SURFACE = "#F9FAFB";

/* ── Page / Layout ───────────────────────────────────────────────────── */
export const Page = styled.div`
  color: ${INK};
  background: #fff;
  /* WORKSOUT 톤: Pretendard 계열 */
  font-family: "Pretendard Variable", Pretendard, -apple-system, system-ui,
               "Segoe UI", Roboto, "Noto Sans KR", "Apple SD Gothic Neo",
               "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 16px 80px;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 40px;
  align-items: start;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Viewer = styled.div`
  position: relative;
  overflow: hidden;
  background: #fafafa;
  border: 1px solid #eee;

  .slider { position: relative; overflow: hidden; width: 100%; }

  .track {
    display: flex;
    width: 100%;
    will-change: transform;
    transition: transform 0.35s ease;
    touch-action: pan-y;
  }

  .slide { flex: 0 0 100%; user-select: none; }
  .slide img { width: 100%; height: auto; display: block; }

  /* 좌/우 반쪽 히트영역 */
  .hit {
    position: absolute; top: 0; bottom: 0; width: 50%;
    z-index: 3; background: transparent; cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .hit.left  { left: 0; }
  .hit.right { right: 0; }

  /* 도트 인디케이터 (이전 UI와 동일 비주얼) */
  .dots{
    position:absolute;
    left:50%;
    bottom:10px;
    transform:translateX(-50%);
    display:flex;
    gap:6px;
    z-index:4;                 /* .hit(3)보다 위 */
    padding:4px 6px;           /* 캡슐 패딩 */
    background:rgba(255,255,255,.7);
    border-radius:999px;
    border:0;
    margin:0;
  }

  .dot-wrap{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
  }

  /* 시각적으로 숨김(legend용) */
  .sr-only{
    position:absolute !important;
    width:1px; height:1px;
    padding:0; margin:-1px;
    overflow:hidden; clip:rect(0,0,1px,1px);
    white-space:nowrap; border:0;
  }

  /* 라디오 입력은 보이지만 접근성 유지 */
  .dot-wrap input{
    position:absolute;
    opacity:0;
    width:1px; height:1px;
    pointer-events:none;
  }

  /* 점(6px) – 이전 UI와 동일 */
  .dot{
    width:6px; height:6px;
    border-radius:50%;
    border:1px solid #cfd4da;
    background:#fff;
    display:block;
  }
  .dot.active{
    background:#111827;
    border-color:#111827;
    transform:scale(1.05);
  }

  /* 키보드 포커스 */
  .dot-wrap input:focus-visible + .dot{
    box-shadow:0 0 0 2px rgba(17,24,39,.25);
  }
`;

export const Track = styled.div<{ $idx: number; $skip?: boolean }>`
  display: flex;
  width: 100%;
  will-change: transform;
  touch-action: pan-y;

  /* ⬇️ inline style 대신 prop으로 제어 */
  transform: translateX(-${({ $idx }) => $idx * 100}%);
  transition: ${({ $skip }) => ($skip ? "none" : "transform 0.35s ease")};
`;

export const Panel = styled.aside``;

/* ── Brand row ───────────────────────────────────────────────────────── */
export const PanelTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;

  .brand {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.2px;
    color: ${INK_SUB};
  }

  .brand-bookmark {
    border: 0;
    background: transparent;
    padding: 4px;
    line-height: 0;
    cursor: pointer;
    display: grid;
    place-items: center;
    -webkit-tap-highlight-color: transparent;
    user-select: none;

    /* 아이콘 이미지를 사용할 때 규격 고정 */
    img { width: 18px; height: 18px; display: block; }

    &:hover { opacity: .85; }
    &:active { transform: scale(.96); }
  }
`;

/* ── Typography ──────────────────────────────────────────────────────── */
export const Title = styled.h1`
  font-size: 24px;      /* 스샷 기준 */
  font-weight: 800;
  line-height: 1.22;
  margin: 0 0 4px;
  color: ${INK};
`;

export const SubTitle = styled.div`
  color: ${INK_SUB};
  font-size: 12px;      /* 스샷 기준 */
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 4px;
`;

export const SmallText = styled.div`
  color: ${MUTED};
  font-size: 12px;      /* 스샷 기준 */
  line-height: 1.5;
  margin-bottom: 2px;
`;

/* ── Price row ───────────────────────────────────────────────────────── */
export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0 16px;

  .label {
    color: ${MUTED};
    font-size: 12px;    /* 스샷 기준 */
    font-weight: 500;
  }
  .price {
    font-size: 18px;
    font-weight: 700;
    color: ${INK};
    font-variant-numeric: lining-nums;
  }
`;

/* ── Size chips (44px 규격) ─────────────────────────────────────────── */
export const SizeGrid = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const SizePill = styled.button<{ $active?: boolean }>`
  position: relative;
  min-width: 52px;
  height: 44px;           /* 스샷 규격 */
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${LINE};
  border-radius: 2px;
  background: #fff;
  font-weight: 600;
  font-size: 12px;        /* 스샷 규격 */
  cursor: pointer;

  ${({ $active }) =>
    $active &&
    css`
      border-color: ${INK};
      color: ${INK};
      background: ${SURFACE};
    `}

  &[disabled] {
    color: ${MUTED_LIGHT};
    background: ${SURFACE};
    cursor: not-allowed;
  }
  &[disabled]::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -10%;
    width: 120%;
    height: 1px;
    background: ${LINE};
    transform: rotate(-35deg);
    pointer-events: none;
  }
`;

/* ── Fit info ───────────────────────────────────────────────────────── */
export const FitInfo = styled.div`
  color: ${MUTED};
  font-size: 12px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3px;
  margin: 6px 0 10px;
`;

/* ── Links ──────────────────────────────────────────────────────────── */
export const Links = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 12px;
  a {
    color: ${INK};
    font-weight: 500;
    font-size: 13px;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

/* ── CTA (44px 버튼 + 44px 아이콘) ─────────────────────────────────── */
export const CTA = styled.div<{ $hasSize?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $hasSize }) => ($hasSize ? "1fr 1fr 44px" : "1fr 44px")};
  gap: 8px;
  align-items: center;
  margin: 16px 0 14px;
`;

export const BigButton = styled.button<{ $disabled?: boolean }>`
  height: 44px;                 /* 스샷 규격 */
  border: 1px solid #000;       /* 요구: 검정 버튼 */
  background: #000;
  color: #fff;
  font-weight: 700;             /* 버튼 가독성 ↑ */
  letter-spacing: .2px;
  font-size: 14px;
  width: 100%;
  border-radius: 2px;
`;

export const IconBtn = styled.button`
  width: 44px;                  /* 스샷 규격 */
  height: 44px;                 /* 스샷 규격 */
  border: 1px solid ${LINE};
  background: #fff;
  display: grid;
  place-items: center;
  border-radius: 2px;

  /* 아이콘 이미지를 사용할 때 규격 고정 */
  img { width: 18px; height: 18px; display: block; }
`;

/* ── Accordion ─────────────────────────────────────────────────────── */
export const Accordion = styled.div`
  margin-top: 14px;
  border-top: 1px solid #eee;   /* 섹션 위 라인 */
`;

export const Section = styled.div`
  border-bottom: 1px solid #eee;
`;

export const SectionHead = styled.div`
  background:#fff;
  color:${INK};
  padding:14px 12px; 
  font-size:14px;
  font-weight:600;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:space-between;
  &:hover{ background:#f7f7f7; }

  & > span:last-child{
    font-size:18px;
    line-height:1;
    min-width:24px;
    text-align:right;
    margin-left:12px;
  }
`;

export const SectionBody = styled.div`
  padding: 15px 12px;
  font-size: 13px; 
  line-height: 1.7;
  color: ${INK_SUB};
  border-top: 1px solid #e0e0e0;
`;

/* 선택 후 노출되는 구매/장바구니 버튼 스킨 */
export const CartButton = styled(BigButton)`
  background: ${INK};
  border: 1px solid ${INK};
  color: #fff;
  &:hover {
    opacity: 0.92;
  }
`;
export const BuyButton = styled(BigButton)`
  background: #fff;
  border: 1px solid ${INK};
  color: ${INK};
  &:hover {
    background: ${SURFACE};
  }
`;
