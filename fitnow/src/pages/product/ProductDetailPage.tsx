import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Bookmark } from "lucide-react";
import {
  Page, Container, Main, Viewer, Panel, PanelTop, Title, SubTitle, SmallText,
  PriceRow, SizeGrid, SizePill, FitInfo, Links, CTA, BigButton, IconBtn,
  Accordion, Section, SectionHead, SectionBody, CartButton, BuyButton, Track
} from "./ProductDetailPage.styled";
import { PRODUCT, BRAND_PRODUCTS, RECENT_PRODUCTS, WITH_ITEM, INVENTORY, currency, type Size } from './data';

const WithItemSection = lazy(() => import("./WithItemSection"));
const BrandProductsSection = lazy(() => import("./BrandProductsSection"));
const RecentProductsSection = lazy(() => import("./RecentProductsSection"));

export default function ProductDetailPage() {
  /* =========================
     메인 이미지 슬라이더 (양방향 무한루프)
     ========================= */
  const IMAGES = PRODUCT?.images ?? [];
  const n = IMAGES.length;

  // 클론 포함 인덱스: [clone-last(0), real(1..n), clone-first(n+1)]
  const [idx, setIdx] = useState(1);                   // 시작: 첫 실슬라이드(1)
  const realIndex = n ? (idx - 1 + n) % n : 0;         // 0..n-1
  const [skipTransition, setSkipTransition] = useState(false);

  // 애니메이션 락 & rAF 핸들
  const isAnimating = useRef(false);
  const rafA = useRef<number | null>(null);
  const rafB = useRef<number | null>(null);
  const rafC = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafA.current) cancelAnimationFrame(rafA.current);
      if (rafB.current) cancelAnimationFrame(rafB.current);
      if (rafC.current) cancelAnimationFrame(rafC.current);
    };
  }, []);

  // 터치 스와이프
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // 전환 시작/끝 핸들러 (락 제어)
  const onTransitionStart = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "transform" || e.target !== e.currentTarget) return;
    isAnimating.current = true;
  };

  // ✅ 전환 종료 후: 전환 OFF → 인덱스 점프 → 전환 ON → 락 해제
  const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "transform" || e.target !== e.currentTarget) return;
    if (n <= 1) { isAnimating.current = false; return; }

    if (idx === n + 1) {
      // 끝→첫
      setSkipTransition(true);
      rafA.current = requestAnimationFrame(() => {
        setIdx(1);
        rafB.current = requestAnimationFrame(() => {
          setSkipTransition(false);
          // 전환 ON이 적용된 다음 프레임에 락 해제
          rafC.current = requestAnimationFrame(() => { isAnimating.current = false; });
        });
      });
      return;
    }

    if (idx === 0) {
      // 첫→끝
      setSkipTransition(true);
      rafA.current = requestAnimationFrame(() => {
        setIdx(n);
        rafB.current = requestAnimationFrame(() => {
          setSkipTransition(false);
          rafC.current = requestAnimationFrame(() => { isAnimating.current = false; });
        });
      });
      return;
    }

    // 일반 케이스: 바로 락 해제
    isAnimating.current = false;
  };

  // 클릭/스와이프 이동 (전환 중에는 무시)
  const goNext = () => {
    if (isAnimating.current) return;
    setIdx((p) => (n > 1 ? p + 1 : p));
  };
  const goPrev = () => {
    if (isAnimating.current) return;
    setIdx((p) => (n > 1 ? p - 1 : p));
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const endX = e.changedTouches[0].clientX;
    const dx = endX - touchStartX;

    // 스와이프 우선
    if (Math.abs(dx) > 40) {
      if (dx < 0) goNext();  // 왼→오 스와이프: 다음
      else goPrev();         // 오→왼 스와이프: 이전
    } else {
      // 탭: 중앙 기준 좌/우 판별
      const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
      const mid = rect.left + rect.width / 2;
      if (endX >= mid) goNext();
      else goPrev();
    }

    setTouchStartX(null);
  };

  /* =========================
     기존 상태들
     ========================= */
  const [size, setSize] = useState<Size | null>(null);
  const [open, setOpen] = useState<{ [k: string]: boolean }>({ 상세정보: true, 배송안내: false, 반품안내: false });
  const [isInProductWishlist, setIsInProductWishlist] = useState(false);
  const [isInBrandWishlist, setIsInBrandWishlist] = useState(false);

  const SIZES  = PRODUCT?.sizes ?? [];
  const FIT    = PRODUCT?.fit;

  const toggle = (k: string) => setOpen((p) => ({ ...p, [k]: !p[k] }));

  const addToCart = () => {
    if (!size) return alert("사이즈를 선택해주세요");
    alert(`장바구니 담기: ${PRODUCT.name} / ${size}`);
  };

  const toggleProductWishlist = () => {
    setIsInProductWishlist(v => !v);
    alert(!isInProductWishlist ? "상품 위시리스트에 추가되었습니다." : "상품 위시리스트에서 제거되었습니다.");
  };
  const toggleBrandWishlist = () => {
    setIsInBrandWishlist(v => !v);
    alert(!isInBrandWishlist ? "브랜드 위시리스트에 추가되었습니다." : "브랜드 위시리스트에서 제거되었습니다.");
  };

  return (
    <Page>
      <Container>
        <Main>
          {/* =========================
              메인 이미지 슬라이더
              ========================= */}
          <Viewer>
            {n > 0 && (
              <div
                className="slider"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <Track
                  className="track"
                  $idx={idx}
                  $skip={skipTransition}
                  onTransitionStart={onTransitionStart}
                  onTransitionEnd={onTransitionEnd}
                >
                  {n > 1 && (
                    <div className="slide" key="clone-last">
                      <img src={IMAGES[n - 1]} alt="clone last" />
                    </div>
                  )}

                  {IMAGES.map((src, i) => (
                    <div className="slide" key={i}>
                      <img src={src} alt={`모델 이미지 ${i + 1}`} />
                    </div>
                  ))}

                  {n > 1 && (
                    <div className="slide" key="clone-first">
                      <img src={IMAGES[0]} alt="clone first" />
                    </div>
                  )}
                </Track>

                {/* 좌/우 반쪽 히트영역: 항상 이동 (양방향 루프) */}
                {n > 1 && (
                  <>
                    <div className="hit left"  aria-label="이전" onClick={goPrev} />
                    <div className="hit right" aria-label="다음" onClick={goNext} />

                    {/* 도트 인디케이터: 네이티브 라디오 (전환 중 무시) */}
                    <fieldset className="dots" aria-label="이미지 인디케이터">
                      {IMAGES.map((_, i) => {
                        const active = realIndex === i;
                        return (
                          <label key={i} className="dot-wrap" aria-label={`${i + 1}번째 이미지`}>
                            <input
                              type="radio"
                              name="pdp-gallery"
                              checked={active}
                              onChange={() => { if (!isAnimating.current) setIdx(i + 1); }}
                            />
                            <span className={`dot ${active ? "active" : ""}`} aria-hidden="true" />
                          </label>
                        );
                      })}
                    </fieldset>
                  </>
                )}
              </div>
            )}
          </Viewer>

          {/* =========================
              우측 패널
              ========================= */}
          <Panel>
            <PanelTop>
              <span className="brand">{PRODUCT.brand}</span>
              <button className="brand-bookmark" aria-label="브랜드 위시리스트" onClick={toggleBrandWishlist}>
                <Bookmark size={18} color={isInBrandWishlist ? "#111827" : "currentColor"} />
              </button>
            </PanelTop>

            <Title>{PRODUCT.name}</Title>
            <SubTitle>{PRODUCT.color}</SubTitle>
            <SmallText>{PRODUCT.koName}</SmallText>
            <SmallText>{PRODUCT.sku}</SmallText>

            <PriceRow>
              <span className="label">정상가</span>
              <span className="price">{currency(PRODUCT.price)}원</span>
            </PriceRow>

            <SizeGrid>
              {SIZES.map((s) => {
                const left = INVENTORY?.[s] ?? 0;
                const soldout = left === 0;
                return (
                  <SizePill
                    key={s}
                    $active={size === s}
                    disabled={soldout}
                    onClick={() => !soldout && setSize(s)}
                    title={soldout ? "일시 품절" : `잔여 ${left}`}
                  >
                    {s}
                  </SizePill>
                );
              })}
            </SizeGrid>

            {FIT && (
              <FitInfo>
                <div>키/몸무게: {FIT.hw}</div>
                <div>착용 사이즈 : {FIT.wearing}</div>
              </FitInfo>
            )}

            <Links>
              <a href="#" onClick={(e) => e.preventDefault()}>사이즈 가이드</a>
              <a href="#" onClick={(e) => e.preventDefault()}>상품 정보 고시</a>
            </Links>

            {/* 상세정보 위 CTA */}
            <CTA $hasSize={Boolean(size)}>
              {size ? (
                <>
                  <CartButton onClick={addToCart}>장바구니</CartButton>
                  <BuyButton onClick={() => alert("구매하기")} $disabled={false}>구매하기</BuyButton>
                  <IconBtn aria-label="상품 위시리스트" onClick={toggleProductWishlist}>
                    <Bookmark size={18} color={isInProductWishlist ? "#111827" : "#9CA3AF"} />
                  </IconBtn>
                </>
              ) : (
                <>
                  <BigButton $disabled>사이즈를 선택해주세요.</BigButton>
                  <IconBtn aria-label="상품 위시리스트" onClick={toggleProductWishlist}>
                    <Bookmark size={18} color={isInProductWishlist ? "#111827" : "#9CA3AF"} />
                  </IconBtn>
                </>
              )}
            </CTA>

            {/* 아코디언 */}
            <Accordion>
              <Section>
                <SectionHead onClick={() => toggle("상세정보")}><span>상세정보</span><span>{open["상세정보"] ? "▴" : "▾"}</span></SectionHead>
                {open["상세정보"] && <SectionBody>ROA Hiking은 2015년 이탈리아에서 시작된 하이브리드 아웃도어 브랜드입니다...</SectionBody>}
              </Section>
              <Section>
                <SectionHead onClick={() => toggle("배송안내")}><span>배송 안내</span><span>{open["배송안내"] ? "▴" : "▾"}</span></SectionHead>
                {open["배송안내"] && <SectionBody>배송은 3일 이내에 완료됩니다. 자세한 사항은 배송 정책을 참조해주세요.</SectionBody>}
              </Section>
              <Section>
                <SectionHead onClick={() => toggle("반품안내")}><span>반품 안내</span><span>{open["반품안내"] ? "▴" : "▾"}</span></SectionHead>
                {open["반품안내"] && <SectionBody>상품에 대한 반품은 배송 완료 후 7일 이내에 가능합니다.</SectionBody>}
              </Section>
              <Section>
                <SectionHead onClick={() => toggle("A/S 안내")}><span>A/S 안내</span><span>{open["A/S 안내"] ? "▴" : "▾"}</span></SectionHead>
                {open["A/S 안내"] && <SectionBody>제품에 대한 A/S는 구매 후 1년 이내에 제공됩니다.</SectionBody>}
              </Section>
            </Accordion>
          </Panel>
        </Main>

        <Suspense fallback={null}><WithItemSection item={WITH_ITEM} /></Suspense>
        <Suspense fallback={null}><BrandProductsSection items={BRAND_PRODUCTS} /></Suspense>
        <Suspense fallback={null}><RecentProductsSection items={RECENT_PRODUCTS} /></Suspense>
      </Container>
    </Page>
  );
}
