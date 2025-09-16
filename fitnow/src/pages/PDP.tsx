import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ChevronLeft, ChevronRight, Search, ShoppingCart, User, Bell, Bookmark } from "lucide-react";

// ====== 데이터 (스크린샷 레이아웃 맞춤) ======
const currency = (n: number) => n.toLocaleString("ko-KR");

type Size = "XS" | "S" | "M" | "L";

const PRODUCT = {
  brand: "BEACH BRAINS",
  name: "TOUR ZIP HOOD",
  koName: "투어 집 후디 차콜",
  sku: "B025FWSWHO00003001",
  price: 278000,
  color: "CHARCOAL",
  fit: { hw: "185cm / 65kg", wearing: "M" },
  sizes: ["XS", "S", "M", "L"] as Size[],
  images: [
    "https://picsum.photos/seed/modelA/1200/1400",
    "https://picsum.photos/seed/modelB/1200/1400",
  ],
};

const WITH_ITEM = {
  brand: "BEACH BRAINS",
  name: "PLEATED WORK PANT",
  price: 360000,
  img: "https://picsum.photos/seed/pants/520/680"
};

const BRAND_PRODUCTS = [
  { brand: "BEACH BRAINS", name: "BREAK BOMBER JACKET", price: 690000, img: "https://picsum.photos/seed/brand1/480/600" },
  { brand: "BEACH BRAINS", name: "TOUR ZIP HOOD", price: 278000, img: "https://picsum.photos/seed/brand2/480/600" },
  { brand: "BEACH BRAINS", name: "FLOAT OVERSHIRT", price: 289000, img: "https://picsum.photos/seed/brand3/480/600" },
  { brand: "BEACH BRAINS", name: "DEAD END SHIRT", price: 219000, img: "https://picsum.photos/seed/brand4/480/600" },
  { brand: "BEACH BRAINS", name: "DREAM TEE", price: 119000, img: "https://picsum.photos/seed/brand5/480/600" }
];

// 최근 본 상품 (스크린샷 패턴)
const RECENT_PRODUCTS = [
  { badge: "신상품 회원전용", brand: "ADIDAS", name: "SAMBA BAPE", price: 209000, img: "https://picsum.photos/seed/recent1/1000/800", soldout: false },
  { badge: "회원전용", brand: "HUMAN MADE", name: "DENIM WORK JACKET PAST", price: 530000, img: "https://picsum.photos/seed/recent2/1000/800", soldout: false },
  { badge: "신상품 회원전용", brand: "ADIDAS", name: "SAMBA BAPE", price: null, img: "https://picsum.photos/seed/recent3/1000/800", soldout: true },
];

const INVENTORY: Record<Size, number> = { XS: 3, S: 7, M: 4, L: 0 };

export default function PDP_ScreenshotMatch() {
  const [img, setImg] = useState(0);
  const [size, setSize] = useState<Size | null>(null);
  const [open, setOpen] = useState<{[k: string]: boolean}>({ 상세정보: true, 배송안내: false, 반품안내: false });

  const toggle = (k: string) => setOpen((p) => ({ ...p, [k]: !p[k] }));

  const addToCart = () => {
    if (!size) return alert("사이즈를 선택해주세요");
    alert(`장바구니 담기: ${PRODUCT.name} / ${size}`);
  };

  return (
    <Page>
      <TopBar>
        <div className="left"> </div>
        <div className="right">
          <Search size={18} />
          <ShoppingCart size={18} />
          <User size={18} />
          <Bell size={18} />
        </div>
      </TopBar>

      <Container>
        <Main>
          {/* 좌: 큰 모델 이미지 */}
          <Viewer>
            <button className="nav prev" onClick={() => setImg((p) => (p - 1 + PRODUCT.images.length) % PRODUCT.images.length)} aria-label="이전 이미지">
              <ChevronLeft />
            </button>
            <img src={PRODUCT.images[img]} alt={`모델 이미지 ${img + 1}`} />
            <button className="nav next" onClick={() => setImg((p) => (p + 1) % PRODUCT.images.length)} aria-label="다음 이미지">
              <ChevronRight />
            </button>
          </Viewer>

          {/* 우: 상품 패널 (스크린샷 맞춘 구성) */}
          <Panel>
            <PanelTop>
              <span className="brand">{PRODUCT.brand}</span>
              <button className="bookmark" aria-label="위시리스트">
                <Bookmark size={18} />
              </button>
            </PanelTop>

            <Title>{PRODUCT.name}</Title>
            <SubTitle>
              <b>{PRODUCT.color}</b>
            </SubTitle>
            <SmallText>{PRODUCT.koName}</SmallText>
            <SmallText>{PRODUCT.sku}</SmallText>

            <PriceRow>
              <span className="label">정상가</span>
              <span className="price">{currency(PRODUCT.price)}원</span>
            </PriceRow>

            <SizeGrid>
              {PRODUCT.sizes.map((s) => {
                const left = INVENTORY[s];
                const soldout = left === 0;
                return (
                  <SizePill
                    key={s}
                    as="button"
                    $active={size === s}
                    disabled={soldout}
                    onClick={() => setSize(s)}
                    title={soldout ? "일시 품절" : `잔여 ${left}`}
                  >
                    {s}
                  </SizePill>
                );
              })}
            </SizeGrid>

            <FitInfo>
              <div>키/몸무게: {PRODUCT.fit.hw}</div>
              <div>착용 사이즈 : {PRODUCT.fit.wearing}</div>
            </FitInfo>

            <Links>
              <a href="#" onClick={(e) => e.preventDefault()}>사이즈 가이드</a>
              <a href="#" onClick={(e) => e.preventDefault()}>상품 정보 고시</a>
            </Links>

            {/* CTA: 스크린샷의 긴 바 형태 */}
            <CTA>
              <BigButton disabled={!size} onClick={addToCart} $disabled={!size}>
                {size ? "장바구니" : "사이즈를 선택해주세요."}
              </BigButton>
              <IconBtn aria-label="위시리스트">
                <Bookmark size={18} />
              </IconBtn>
            </CTA>

            {/* 아코디언 섹션 */}
            <Accordion>
              <Section>
                <SectionHead onClick={() => toggle("상세정보")}>
                  <span>상세정보</span>
                  <span>{open["상세정보"] ? "▴" : "▾"}</span>
                </SectionHead>
                {open["상세정보"] && (
                  <SectionBody>
                    BEACH BRAINS는 뉴질랜드 기반의 브랜드입니다. 긴장을 풀고 쉬며, 뇌를 잠시 해변에 둔다는 의미에서 브랜드 네임을 유래했습니다. 기본 카테고리의 간결함과 루즈한 핏을 입혀 컬렉션을 진행합니다.
                  </SectionBody>
                )}
              </Section>

              <Section>
                <SectionHead onClick={() => toggle("배송안내")}>
                  <span>배송 안내</span>
                  <span>{open["배송안내"] ? "▴" : "▾"}</span>
                </SectionHead>
                {open["배송안내"] && (
                  <SectionBody>
                    일반 배송 2~3일 소요, 일정 금액 이상 무료 배송.
                  </SectionBody>
                )}
              </Section>

              <Section>
                <SectionHead onClick={() => toggle("반품안내")}>
                  <span>반품 안내</span>
                  <span>{open["반품안내"] ? "▴" : "▾"}</span>
                </SectionHead>
                {open["반품안내"] && (
                  <SectionBody>
                    수령 후 7일 이내 교환/반품 가능(미착용/택 부착/구성품 동봉).
                  </SectionBody>
                )}
              </Section>
            </Accordion>
          </Panel>
        </Main>

        <WithWrap>
          <h3>함께 착용한 상품</h3>
          <WithCard>
            <img src={WITH_ITEM.img} alt={WITH_ITEM.name} />
            <div className="meta">
              <div className="brand">{WITH_ITEM.brand}</div>
              <div className="name">{WITH_ITEM.name}</div>
              <div className="price">₩ {currency(WITH_ITEM.price)}원</div>
            </div>
          </WithCard>
        </WithWrap>

        <BrandWrap>
          <h3>브랜드 상품</h3>
          <BrandGrid>
            {BRAND_PRODUCTS.map((p, i) => (
              <BrandCard key={i}>
                <img src={p.img} alt={p.name} />
                <div className="brand">{p.brand}</div>
                <div className="name">{p.name}</div>
                <div className="price">₩ {currency(p.price)}</div>
              </BrandCard>
            ))}
          </BrandGrid>
        </BrandWrap>

        <RecentWrap>
          <h3>최근 본 상품</h3>
          <RecentGrid>
            {RECENT_PRODUCTS.map((p, i) => (
              <RecentCard key={i}>
                <div className="imgWrap">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="meta">
                  {p.badge && <div className="badge">{p.badge}</div>}
                  <div className="brand">{p.brand}</div>
                  <div className="name">{p.name}</div>
                  {p.soldout ? (
                    <div className="soldout">품절</div>
                  ) : (
                    <div className="price">{currency(p.price as number)}원</div>
                  )}
                </div>
              </RecentCard>
            ))}
          </RecentGrid>
        </RecentWrap>
      </Container>
    </Page>
  );
}

// ====== 스타일 ======
const Page = styled.div`
  color:#1a1a1a; background:#fff;
  font-family: ui-sans-serif, system-ui, -apple-system, "Noto Sans KR", Roboto, Helvetica, Arial, sans-serif;
`;

const TopBar = styled.div`
  height:44px; display:flex; align-items:center; justify-content:space-between; padding:0 16px; border-bottom:1px solid #eee;
  .right{display:flex; gap:14px; color:#666}
`;

const Container = styled.div`
  max-width: 1280px; margin:0 auto; padding: 24px 16px 80px;
`;

const Main = styled.div`
  display:grid; grid-template-columns: 1.35fr .65fr; gap: 40px; align-items:start;
  @media (max-width: 1024px){ grid-template-columns:1fr; }
`;

const Viewer = styled.div`
  position:relative; border-radius: 16px; overflow:hidden; background:#fafafa; border:1px solid #eee;
  img{ width:100%; height:auto; display:block; }
  .nav{ position:absolute; top:50%; transform:translateY(-50%); background:rgba(255,255,255,.85); border:1px solid #ddd; border-radius:999px; padding:6px; cursor:pointer; }
  .prev{ left: 10px; }
  .next{ right: 10px; }
`;

const Panel = styled.aside``;

const PanelTop = styled.div`
  display: flex;
  justify-content: space-between; /* 왼쪽과 오른쪽에 배치 */
  align-items: center; /* 세로로 가운데 정렬 */
  margin-bottom: 8px;
  width: 100%; /* 100% 너비로 설정 */
  
  .brand {
    font-weight: 700;
    letter-spacing: 0.3px;
    color: #222;
    flex-grow: 1; /* 브랜드는 왼쪽에 정렬 */
  }

  .bookmark {
    width: 34px;
    height: 34px;
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    display: grid;
    place-items: center;
    background: #fff;
    cursor: pointer; /* 북마크 버튼에 커서 표시 */
  }
`;


const Title = styled.h1`
  font-size: 28px; font-weight: 800; margin: 0 0 4px; line-height:1.15;
`;
const SubTitle = styled.div`
  color:#222; margin-bottom: 6px; letter-spacing:.4px;
`;
const SmallText = styled.div`
  color:#777; font-size: 13px; margin-bottom: 2px;
`;

const PriceRow = styled.div`
  display:flex; align-items:center; gap:10px; margin: 12px 0 18px; font-weight:700;
  .label{ color:#666; font-size: 13px; font-weight:600; }
  .price{ font-size: 18px; }
`;

const SizeGrid = styled.div`
  display:flex; gap: 10px; flex-wrap:wrap; margin-bottom: 10px;
`;

const SizePill = styled.span<{ $active?: boolean }>`
  padding: 10px 16px; border-radius: 12px; border:1px solid #ddd; background:#fff; font-weight:700; font-size:13px; cursor:pointer;
  ${({ $active }) => $active && css`border-color:#0d5e4c; color:#0d5e4c; box-shadow:0 0 0 3px rgba(13,94,76,.08);`}
  &:disabled{ opacity:.35; cursor:not-allowed; text-decoration:line-through; }
`;

const FitInfo = styled.div`
  color:#666; font-size:12px; display:grid; grid-template-columns: 1fr; gap:4px; margin: 8px 0 10px;
`;

const Links = styled.div`
  display:flex; gap:18px; margin-bottom: 14px;
  a{ color:#0d5e4c; font-weight:700; font-size:13px; }
`;

const CTA = styled.div`
  display:grid; grid-template-columns: 1fr 42px; gap: 8px; align-items:center; margin-bottom: 18px;
`;

const BigButton = styled.button<{ $disabled?: boolean }>`
  height:48px; border-radius:10px; border:1px solid ${({ $disabled }) => ($disabled ? "#e3e3e3" : "#0d5e4c")};
  background: ${({ $disabled }) => ($disabled ? "#f6f7f8" : "#0d5e4c")};
  color: ${({ $disabled }) => ($disabled ? "#777" : "#fff")};
  font-weight:800; letter-spacing:.2px;
`;

const IconBtn = styled.button`
  width: 42px; height: 48px; border: 1px solid #e3e3e3; border-radius: 10px; background:#fff; display:grid; place-items:center;
`;

const Accordion = styled.div`
  margin-top: 14px; border-top: 1px solid #eee;
`;

const Section = styled.div`
  border-bottom: 1px solid #eee;
`;

const SectionHead = styled.button`
  width:100%; display:flex; justify-content:space-between; align-items:center; padding:16px 0; font-weight:800;
`;

const SectionBody = styled.div`
  color:#444; line-height:1.7; padding: 0 0 18px; font-size:14px;
`;

// ===== 아래 섹션 스타일 =====
const WithWrap = styled.section`
  margin-top: 48px;
  h3{ font-size: 16px; font-weight: 800; margin-bottom: 16px; }
`;

const WithCard = styled.div`
  width: 240px; display: grid; gap: 8px;
  img{ width: 100%; height: auto; display: block; border-radius: 10px; border: 1px solid #eee; background:#fafafa; }
  .meta{ display:grid; gap: 2px; }
  .brand{ font-size: 12px; color:#666; }
  .name{ font-weight: 800; font-size: 13px; }
  .price{ font-size: 13px; }
`;

const BrandWrap = styled.section`
  margin-top: 40px;
  h3{ font-size: 16px; font-weight: 800; margin-bottom: 14px; }
`;

const BrandGrid = styled.div`
  display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 16px;
  @media (max-width: 1024px){ grid-template-columns: repeat(2, minmax(0,1fr)); }
  @media (max-width: 520px){ grid-template-columns: 1fr; }
`;

const BrandCard = styled.div`
  border: 1px solid #eee; border-radius: 12px; overflow: hidden; background:#fff;
  img{ width: 100%; height: auto; display: block; }
  .brand{ font-size: 12px; color:#666; padding: 10px 10px 0; }
  .name{ padding: 0 10px; font-weight: 800; }
  .price{ padding: 8px 10px 12px; font-weight: 700; }
`;


// ===== 최근 본 상품 스타일 =====
const RecentWrap = styled.section`
  margin-top: 56px;
  h3{ font-size: 16px; font-weight: 800; margin-bottom: 16px; }
`;

const RecentGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 24px;
  @media (max-width: 1180px){ grid-template-columns: repeat(2, minmax(0,1fr)); }
  @media (max-width: 720px){ grid-template-columns: 1fr; }
`;

const RecentCard = styled.div`
  border: 1px solid #eee; border-radius: 12px; overflow: hidden; background:#fff; display:grid; grid-template-rows: auto auto;
  .imgWrap{ background:#f6f6f6; }
  .imgWrap img{ width: 100%; height: auto; display:block; }
  .meta{ padding: 12px; }
  .badge{ font-size: 12px; color:#8a8a8a; margin-bottom: 6px; }
  .brand{ font-size: 12px; color:#666; }
  .name{ font-weight: 800; margin-top: 2px; }
  .price{ font-weight: 700; margin-top: 6px; }
  .soldout{ color:#8a8a8a; margin-top: 6px; }
`;

