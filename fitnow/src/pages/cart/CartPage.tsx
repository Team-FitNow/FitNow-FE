
// 1) React / 라이브러리
import React, { useEffect, useMemo, useReducer, useState, useCallback } from "react";

// 2) 상대경로 import (부모 → 자식)
import {
  ContainerStyled,
  HeaderStyled,
  TitleStyled,
  ListStyled,
  ItemCardStyled,
  ThumbStyled,
  ItemMetaStyled,
  QtyControlStyled,
  PriceBoxStyled,
  SectionStyled,
  RowStyled,
  CouponBoxStyled,
  ShippingBoxStyled,
  RadioStyled,
  SummaryCardStyled,
  AgreeBoxStyled,
  EmptyStyled,
  ButtonStyled,
  InputStyled,
  CheckboxStyled,
  TabsStyled,
  TabItemStyled,
  EmptyBandStyled,
  RecoSectionStyled,
  RecoHeaderStyled,
  RecoGridStyled,
  RecoCardStyled,
  RecoThumbWrapStyled,
  RecoThumbStyled,
  RecoMetaStyled,
  RecoPriceRowStyled,
  DividerStyled,
  TabsIndicatorStyled,
  // 모달 스타일(정책/주문서 모두 공용으로 사용)
  ModalOverlayStyled,
  ModalContentStyled,
  ModalHeaderStyled,
  ModalBodyStyled,
  ModalFooterStyled,
  ModalCloseButtonStyled,
} from "./CartPage.styled.ts";


// ==============================
// Types
// ==============================
type ShippingMode = "일반"; // 특급 제거

type CartItem = {
  id: string;
  brand: string;
  name: string;
  option?: string;
  price: number;
  fee?: number;
  img: string;
  qty: number;
  seller?: string;
  condition?: "새상품" | "중고" | "미개봉";
  limited?: boolean;
  // compositeUrl?: string; // 추후 합성 이미지 URL 연결 시 사용할 수 있음
  // 추천 상품용 필드
  likes?: number;
  reviews?: number;
  transactions?: number;
  isQuickDelivery?: boolean;
};

type State = {
  items: CartItem[];
  code: string;
  shipping: ShippingMode;
  agreement: boolean;
};

// ==============================
// Constants & Utils
// ==============================
const STORAGE_KEY = "CART_V1";

const SEED: CartItem[] = [
  {
    id: "C.P.Company-01",
    brand: "C.P. Company",
    name: "C.P. Company Chrome-R Goggle Down Jacket Black - 24FW",
    option: "XL",
    price: 733000,
    fee: 2000,
    img: "data:image/jpeg;base64,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",
    qty: 1,
    limited: true,
  },
  {
    id: "C.P.Company-02",
    brand: "C.P. Company",
    name: "C.P. Company D.D. Shell Hooded Medium Down Jacket Grape Leaf Green - 24FW",
    option: "XL",
    price: 1190000,
    fee: 2000,
    img: "https://image-cdn.hypb.st/https%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F25%2F7c%2Fpuffer-jacket-1-1-c6868.jpg?fit=max&w=460&q=60",
    qty: 1,
    limited: false,
  },
];

// 추천 상품 (데모)
const RECO_SEED: CartItem[] = [
  {
    id: "Stone-Island-03",
    brand: "Stone Island",
    name: "Stone Island 10210 Supima Cotton Twill Stretch-TC Overshirt Musk Green - 24SS",
    price: 359000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ueZso1OwM-WXZb7IZJpURRIKnUfIqWu07w&s",
    qty: 1,
    likes: 172,
    reviews: 8,
    transactions: 38,
    isQuickDelivery: true,
  },
  {
    id: "Stone-Island-04",
    brand: "Stone Island",
    name: "Stone Island 40723 Crinkle Reps Hooded Down Jacket Black - 24FW",
    price: 1300000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTkvyMlIfrPRcYkIOB1sLbqycsiZH40-bLug&s",
    qty: 1,
    likes: 1955,
    reviews: 281,
    transactions: 951,
    isQuickDelivery: true,
  },
  {
    id: "Stone-Island-05",
    brand: "Stone Island",
    name: "Stone Island Q0519 Nylon Metal Econyl Regenerated Nylon Primaloft Jacket Light Grey - 22FW",
    price: 510000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCqlSs9sCFeIrQO3FHpnwQ8Pcs5cQLyqVxw&s",
    qty: 1,
    likes: 385,
    reviews: 27,
    transactions: 139,
    isQuickDelivery: true,
  },
  {
    id: "Stone-Island-06",
    brand: "Stone Island",
    name: "Stone Island 101WN Brushed Cotton Canvas T.CO+OLD Overshirt Light Grey - 22FW",
    price: 629000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nVeamE8Wsh988REvZDSCfa14_bmmWg4X7w&s ",
    qty: 1,
    likes: 343,
    reviews: 2,
    transactions: 59,
    isQuickDelivery: true,
  },
];

const numberFormat = (n: number): string =>
  new Intl.NumberFormat("ko-KR").format(n);

// 쿠폰
const applyCoupon = (
  subtotal: number,
  code: string,
): { discount: number; label: string } => {
  const normalized = code.trim().toUpperCase();
  if (!normalized) return { discount: 0, label: "" };
  if (normalized === "WELCOME5")
    return { discount: Math.floor(subtotal * 0.05), label: "신규 5%" };
  if (normalized === "FREESHIP") return { discount: 3000, label: "배송비 지원" };
  if (/VIP\d{2}/.test(normalized))
    return { discount: 20000, label: "VIP 바우처" };
  return { discount: 0, label: "유효하지 않은 쿠폰" };
};

// 배송비 (특급 제거)
const getShippingFee = (_mode: ShippingMode, itemCount: number): number => {
  if (itemCount === 0) return 0;
  return 3000; // 일반 고정
};

// 서비스 수수료
const getServiceFee = (subtotal: number): number => {
  if (subtotal === 0) return 0;
  return Math.max(0, Math.floor(subtotal * 0.01));
};

// 개별 상품 예상 도착일 (일반: T+2일)
const getDeliveryDateLabel = (base: Date, plusDays: number): string => {
  const d = new Date(base);
  d.setDate(d.getDate() + plusDays);
  const fmt = new Intl.DateTimeFormat("ko-KR", {
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });
  return `${fmt.format(d)} 도착예정`;
};

// ==============================
// Reducer
// ==============================
type Action =
  | { type: "INIT"; payload: CartItem[] }
  | { type: "INC"; id: string }
  | { type: "DEC"; id: string }
  | { type: "REMOVE"; id: string }
  | { type: "CLEAR" }
  | { type: "CODE"; code: string }
  | { type: "SHIP"; shipping: ShippingMode }
  | { type: "AGREE"; value: boolean }
  | { type: "ADD"; item: CartItem };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INIT":
      return { ...state, items: action.payload };
    case "INC":
      return {
        ...state,
        items: state.items.map((it) =>
          it.id === action.id ? { ...it, qty: Math.min(it.qty + 1, 9) } : it,
        ),
      };
    case "DEC":
      return {
        ...state,
        items: state.items.map((it) =>
          it.id === action.id ? { ...it, qty: Math.max(it.qty - 1, 1) } : it,
        ),
      };
    case "REMOVE":
      return { ...state, items: state.items.filter((it) => it.id !== action.id) };
    case "CLEAR":
      return { ...state, items: [] };
    case "CODE":
      return { ...state, code: action.code };
    case "SHIP":
      return { ...state, shipping: action.shipping };
    case "AGREE":
      return { ...state, agreement: action.value };
    case "ADD": {
    const exists = state.items.find((i) => i.id === action.item.id && i.option === action.item.option);
    const addQty = Math.max(1, action.item.qty || 1);
  return exists
    ? {
        ...state,
        items: state.items.map((i) =>
          i.id === action.item.id && i.option === action.item.option
            ? { ...i, qty: Math.min(i.qty + addQty, 9) }
            : i
        ),
      }
    : { ...state, items: [...state.items, { ...action.item, qty: addQty }] };
}

    default:
      return state;
  }
};

// ==============================
// Component
// ==============================
export const CartPage: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    code: "",
    shipping: "일반" as ShippingMode,
    agreement: false,
  });

  const [toast, setToast] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"fitnow" | "brand">("fitnow");

  // 모달 상태
  const [policyOpen, setPolicyOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  // 옵션/수량 선택 모달
  const [optionOpen, setOptionOpen] = useState(false);
  const [optionTarget, setOptionTarget] = useState<CartItem | null>(null);
  const [optionValue, setOptionValue] = useState<string>("270"); // 기본 선택값
  const [optionQty, setOptionQty] = useState<number>(1);

  // init (localStorage → fallback SEED)
  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as State;
        dispatch({ type: "INIT", payload: parsed.items || [] });
      } catch {
        dispatch({ type: "INIT", payload: SEED });
      }
    } else {
      dispatch({ type: "INIT", payload: SEED });
    }
  }, []);

  // persist
  useEffect(() => {
    const data: State = { ...state };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [state]);

  // 토스트 2.5초 후 자동닫힘
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2500);
    return () => clearTimeout(t);
  }, [toast]);

  // Escape로 모달 닫기
  const handleEscClose = useCallback(
  (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (orderOpen) setOrderOpen(false);
      if (policyOpen) setPolicyOpen(false);
      if (optionOpen) setOptionOpen(false);
    }
  },
  [orderOpen, policyOpen, optionOpen]
);

useEffect(() => {
  if (!orderOpen && !policyOpen && !optionOpen) return;
  window.addEventListener("keydown", handleEscClose);
  return () => window.removeEventListener("keydown", handleEscClose);
}, [orderOpen, policyOpen, optionOpen, handleEscClose]);

  const totals = useMemo(() => {
    const subtotalItems = state.items.reduce(
      (acc, it) => acc + it.price * it.qty + (it.fee || 0) * it.qty,
      0,
    );
    const coupon = applyCoupon(subtotalItems, state.code);
    const ship = getShippingFee(state.shipping, state.items.length);
    const service = getServiceFee(subtotalItems);
    const discount = Math.min(coupon.discount, subtotalItems + service + ship);
    const total = Math.max(0, subtotalItems + service + ship - discount);
    return { subtotalItems, ship, service, coupon, discount, total };
  }, [state.items, state.code, state.shipping]);

  const itemCount = state.items.reduce((n, it) => n + it.qty, 0);
  const brandCount = 0; // 브랜드 배송 (연동 전 0 고정)



  return (
    <ContainerStyled>
      {/* Header + Tabs */}
      <HeaderStyled>
        <TitleStyled>장바구니</TitleStyled>

        <TabsStyled>
          <TabItemStyled
            $active={activeTab === "fitnow"}
            onClick={() => setActiveTab("fitnow")}
          >
            <div className="count">{itemCount}</div>
            <div className="label">F!tNow 배송</div>
          </TabItemStyled>

          <TabItemStyled
            $active={activeTab === "brand"}
            onClick={() => setActiveTab("brand")}
          >
            <div className="count">{brandCount}</div>
            <div className="label">브랜드 배송</div>
          </TabItemStyled>

          {/* 이동하는 하이라이터 */}
          <TabsIndicatorStyled $index={activeTab === "fitnow" ? 0 : 1} />
        </TabsStyled>
      </HeaderStyled>

      {/* Empty band */}
      {state.items.length === 0 && (
        <EmptyBandStyled>
          <p className="msg">
            장바구니에 담긴 상품이 없습니다.
            <br />
            원하는 상품을 장바구니에 담아보세요!
          </p>
          <a className="cta" href="/shop">
            SHOP 바로가기
          </a>
        </EmptyBandStyled>
      )}

      {/* Items */}
      <ListStyled>
        {state.items.length === 0 ? (
          <EmptyStyled>
            <div className="title">장바구니가 비어 있어요</div>
            <div className="desc">원하는 상품을 담아 결제를 시작해보세요.</div>
            <div style={{ display: "flex", gap: 8 }}>
              <ButtonStyled>인기 상품 보러가기</ButtonStyled>
              <ButtonStyled
                onClick={() => {
                  dispatch({ type: "INIT", payload: SEED });
                  setToast("데모 상품을 담았습니다.");
                }}
              >
                데모 상품 담기
              </ButtonStyled>
            </div>
          </EmptyStyled>
        ) : (
          state.items.map((it) => (
            <ItemCardStyled key={it.id}>
              <ThumbStyled src={it.img} alt={it.name} />
              <div>
                <RowStyled>
                  <div style={{ minWidth: 0 }}>
                    <ItemMetaStyled>
                      <div className="brand">
                        {it.brand}
                      </div>
                      <div className="name">{it.name}</div>
                      <div className="sub">
                        옵션: {it.option || "단일"}
                      </div>
                    </ItemMetaStyled>
                  </div>
                  <ButtonStyled
                    aria-label="remove"
                    onClick={() => {
                      dispatch({ type: "REMOVE", id: it.id });
                      setToast("상품을 삭제했습니다.");
                    }}
                    title="삭제"
                  >
                    삭제
                  </ButtonStyled>
                </RowStyled>

                <RowStyled style={{ marginTop: 10 }}>
                  <QtyControlStyled>
                    <button onClick={() => dispatch({ type: "DEC", id: it.id })}>
                      -
                    </button>
                    <div className="qty">{it.qty}</div>
                    <button onClick={() => dispatch({ type: "INC", id: it.id })}>
                      +
                    </button>
                  </QtyControlStyled>

                  <PriceBoxStyled>
                    <div className="price">
                      {numberFormat(it.price * it.qty)}원
                    </div>
                    {it.fee ? (
                      <div className="fee">
                        수수료 {numberFormat((it.fee || 0) * it.qty)}원 포함
                      </div>
                    ) : null}
                  </PriceBoxStyled>
                </RowStyled>
              </div>
            </ItemCardStyled>
          ))
        )}
      </ListStyled>

      {/* Coupon / Shipping / Summary / Agreement */}
      <SectionStyled>
        <CouponBoxStyled>
          <RowStyled>
            <strong>쿠폰/프로모션</strong>
          </RowStyled>
          <div className="row">
            <InputStyled
              placeholder="쿠폰 코드 입력 (WELCOME5, FREESHIP, VIP12)"
              value={state.code}
              onChange={(e) => dispatch({ type: "CODE", code: e.target.value })}
            />
            <button
              onClick={() =>
                setToast(
                  state.code ? "쿠폰을 적용했습니다." : "쿠폰 코드가 비어있어요.",
                )
              }
            >
              적용
            </button>
          </div>
          {state.code ? (
            <div
              className={`hint ${
                applyCoupon(totals.subtotalItems, state.code).label ===
                "유효하지 않은 쿠폰"
                  ? "error"
                  : ""
              }`}
            >
              {applyCoupon(totals.subtotalItems, state.code).label ||
                "쿠폰 코드 감지됨"}
            </div>
          ) : null}
        </CouponBoxStyled>

        {/* 배송 방법 (특급 제거 → 일반만 표시) */}
        <ShippingBoxStyled>
          <strong>배송 방법</strong>
          <RadioStyled $active>
            <input type="radio" name="shipping" checked readOnly />
            <div>
              <div>일반</div>
              <div className="desc">
                예상 2~3일 · {numberFormat(getShippingFee("일반", state.items.length))}원
              </div>
            </div>
          </RadioStyled>
        </ShippingBoxStyled>

        <SummaryCardStyled>
          <div className="line">
            <span>상품 금액</span>
            <span>{numberFormat(totals.subtotalItems)}원</span>
          </div>
          <div className="line">
            <span>서비스 수수료</span>
            <span>{numberFormat(totals.service)}원</span>
          </div>
          <div className="line">
            <span>배송비</span>
            <span>{numberFormat(totals.ship)}원</span>
          </div>
          {totals.discount > 0 ? (
            <div className="line">
              <span>할인 ({applyCoupon(totals.subtotalItems, state.code).label})</span>
              <span>-{numberFormat(totals.discount)}원</span>
            </div>
          ) : null}
          <hr />
          <div className="total">
            <span>결제 예정 금액</span>
            <span>{numberFormat(totals.total)}원</span>
          </div>
        </SummaryCardStyled>

        <AgreeBoxStyled>
          <CheckboxStyled
            checked={state.agreement}
            onChange={(e) =>
              dispatch({ type: "AGREE", value: e.currentTarget.checked })
            }
          />
          <span className="text">
            구매조건 및 환불/교환 정책을 확인했어요.{" "}
            <button
              type="button"
              className="link"
              onClick={() => setPolicyOpen(true)}
              aria-haspopup="dialog"
              aria-controls="policy-modal"
            >
              자세히
            </button>
          </span>
        </AgreeBoxStyled>
      </SectionStyled>

      <DividerStyled />

      {/* 추천 상품 */}
      <RecoSectionStyled aria-label="추천 상품">
        <RecoHeaderStyled>
          <h2>이런 상품은 어떠세요?</h2>
        <button onClick={() => setToast("추천 알고리즘 안내 (데모)")}>더 보기</button>
        </RecoHeaderStyled>

        <RecoGridStyled>
          {RECO_SEED.map((p) => (
            <RecoCardStyled key={p.id}>
              <RecoThumbWrapStyled>
                <RecoThumbStyled src={p.img} alt={p.name} loading="lazy" />
              </RecoThumbWrapStyled>
              <RecoMetaStyled>
                <div className="brand">{p.brand}</div>
                <div className="name">{p.name}</div>
              </RecoMetaStyled>
              <RecoPriceRowStyled>
                <div className="price">{numberFormat(p.price)}원</div>
              </RecoPriceRowStyled>
            </RecoCardStyled>
          ))}
        </RecoGridStyled>
      </RecoSectionStyled>

      {/* Sticky Checkout Bar 제거 */}

      {/* =============== 모달: 환불/교환 정책 =============== */}
      {policyOpen && (
        <ModalOverlayStyled
          role="dialog"
          aria-modal="true"
          id="policy-modal"
          onClick={() => setPolicyOpen(false)}
        >
          <ModalContentStyled
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.key === "Escape" && setPolicyOpen(false)}
          >
            <ModalHeaderStyled>
              <h3>환불/교환 정책</h3>
            </ModalHeaderStyled>
            <ModalBodyStyled>
              <h4>기본 정책</h4>
              <ul>
                <li>상품 수령 후 7일 이내 교환/환불 신청이 가능합니다.</li>
                <li>포장을 개봉했거나 사용 흔적이 있는 경우에는 불가할 수 있습니다.</li>
                <li>단순 변심의 경우 왕복 배송비가 발생합니다.</li>
              </ul>
              <h4>예외 사항</h4>
              <ul>
                <li>한정 상품 및 미개봉 보장 상품은 정책이 다를 수 있습니다.</li>
                <li>자세한 내용은 고객센터를 통해 문의해 주세요.</li>
              </ul>
            </ModalBodyStyled>
            <ModalFooterStyled>
              {/* “확인” 시 체크박스도 같이 체크 */}
              <ModalCloseButtonStyled
                onClick={() => {
                  setPolicyOpen(false);
                  if (!state.agreement) {
                    dispatch({ type: "AGREE", value: true });
                    setToast("정책에 동의하셨습니다.");
                  }
                }}
              >
                확인
              </ModalCloseButtonStyled>
            </ModalFooterStyled>
          </ModalContentStyled>
        </ModalOverlayStyled>
      )}

      {/* =============== 모달: 옵션/수량 선택 =============== */}
{optionOpen && optionTarget && (
  <ModalOverlayStyled
    role="dialog"
    aria-modal="true"
    id="option-modal"
    onClick={() => setOptionOpen(false)}
  >
    <ModalContentStyled
      tabIndex={-1}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.key === "Escape" && setOptionOpen(false)}
      aria-labelledby="option-modal-title"
    >
      <ModalHeaderStyled>
        <h3 id="option-modal-title">옵션/수량 선택</h3>
        <ModalCloseButtonStyled onClick={() => setOptionOpen(false)}>
          닫기
        </ModalCloseButtonStyled>
      </ModalHeaderStyled>

      <ModalBodyStyled>
        {/* 상품 미리보기 */}
        <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: 12, alignItems: "center", marginBottom: 12 }}>
          <img
            src={optionTarget.img}
            alt={optionTarget.name}
            style={{ width: 96, height: 96, objectFit: "cover", background: "#f6f7f8" }}
            loading="lazy"
          />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 12, color: "rgba(0,0,0,0.5)", letterSpacing: 0.2, textTransform: "uppercase" }}>
              {optionTarget.brand}
            </div>
            <div
              style={{ marginTop: 4, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
              title={optionTarget.name}
            >
              {optionTarget.name}
            </div>
          </div>
        </div>

        {/* 옵션 선택 (사이즈 예시) */}
        <div style={{ display: "grid", gap: 10 }}>
          <label style={{ fontSize: 13 }}>
            사이즈
            <select
              value={optionValue}
              onChange={(e) => setOptionValue(e.target.value)}
              style={{
                display: "block",
                marginTop: 6,
                width: "100%",
                height: 40,
                border: "1px solid rgba(0,0,0,0.15)",
                background: "#fff",
                padding: "0 10px",
              }}
            >
              {["240", "250", "260", "270", "280", "290"].map((s) => (
                <option value={s} key={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>

          {/* 수량 선택 */}
          <div>
            <div style={{ fontSize: 13, marginBottom: 6 }}>수량</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button
                onClick={() => setOptionQty((q) => Math.max(1, q - 1))}
                style={{ width: 32, height: 32, border: "1px solid rgba(0,0,0,0.15)", background: "transparent" }}
                aria-label="수량 감소"
              >
                −
              </button>
              <div style={{ width: 32, textAlign: "center", fontWeight: 500, color: "rgba(0,0,0,0.55)" }}>
                {optionQty}
              </div>
              <button
                onClick={() => setOptionQty((q) => Math.min(9, q + 1))}
                style={{ width: 32, height: 32, border: "1px solid rgba(0,0,0,0.15)", background: "transparent" }}
                aria-label="수량 증가"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </ModalBodyStyled>

      <ModalFooterStyled>
        <div style={{ marginRight: "auto", fontSize: 14, opacity: 0.85 }}>
          선택 수량 {optionQty}개 · 합계{" "}
          {numberFormat((optionTarget.price + (optionTarget.fee ?? 2000)) * optionQty)}원
          <span style={{ fontSize: 12, color: "rgba(0,0,0,0.55)", marginLeft: 6 }}>
            (수수료 포함)
          </span>
        </div>

        {/* 담기 */}
        <button
          type="button"
          onClick={() => {
            const withFee: CartItem = { ...optionTarget, fee: optionTarget.fee ?? 2000 };
            dispatch({
              type: "ADD",
              item: { ...withFee, option: optionValue, qty: optionQty },
            });
            setOptionOpen(false);
            setToast("장바구니에 담았습니다.");
          }}
          style={{
            padding: "10px 14px",
            border: "1px solid rgba(0,0,0,0.85)",
            background: "#111",
            color: "#fff",
            borderRadius: 8,
            cursor: "pointer",
            transition: "background 160ms ease, color 160ms ease, box-shadow 160ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#000";
            e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#111";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          담기
        </button>
      </ModalFooterStyled>
    </ModalContentStyled>
  </ModalOverlayStyled>
)}


      {/* =============== 모달: 주문서 요약 =============== */}
      {orderOpen && (
        <ModalOverlayStyled
          role="dialog"
          aria-modal="true"
          id="order-modal"
          onClick={() => setOrderOpen(false)}
        >
          <ModalContentStyled
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.key === "Escape" && setOrderOpen(false)}
          >
            <ModalHeaderStyled>
              <h3>주문서 요약</h3>
              <ModalCloseButtonStyled onClick={() => setOrderOpen(false)}>
                닫기
              </ModalCloseButtonStyled>
            </ModalHeaderStyled>

            <ModalBodyStyled>
              {state.items.length === 0 ? (
                <p>장바구니에 담긴 상품이 없습니다.</p>
              ) : (
                <div style={{ display: "grid", gap: 20 }}>
                  {state.items.map((it) => (
                    <div
                      key={it.id}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "112px 1fr auto",
                        gap: 16,
                        alignItems: "center",
                        border: "none",
                        padding: 0,
                      }}
                    >
                      {/* ✅ 썸네일 + 합성 미리보기 영역 (복원) */}
                      <div style={{ display: "grid", gap: 8 }}>
                        <img
                          src={it.img}
                          alt={it.name}
                          style={{
                            width: 112,
                            height: 112,
                            objectFit: "cover",
                            border: "none",
                            background: "#f6f7f8",
                          }}
                          loading="lazy"
                        />
                        {/* 추후 실제 합성 이미지가 생기면 아래 div를 <img src={it.compositeUrl} .../> 로 교체 */}
                        <div
                          style={{
                            width: 112,
                            height: 72,
                            border: "1px dashed rgba(0,0,0,0.2)",
                            display: "grid",
                            placeItems: "center",
                            fontSize: 11,
                            color: "rgba(0,0,0,0.55)",
                            background: "transparent",
                          }}
                          aria-label="합성 미리보기(준비중)"
                        >
                          합성 미리보기
                        </div>
                      </div>

                      {/* 메타 (브랜드만, 옵션/상태/셀러 제거) */}
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: 12,
                            color: "rgba(0,0,0,0.5)",
                            letterSpacing: 0.2,
                            textTransform: "uppercase",
                          }}
                        >
                          {it.brand}
                        </div>

                        <div
                          style={{
                            marginTop: 6,
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          title={it.name}
                        >
                          {it.name}
                        </div>

                        {/* 배송 예정일만 남김 */}
                        <div style={{ marginTop: 8, fontSize: 12, color: "rgba(0,0,0,0.55)" }}>
                          {getDeliveryDateLabel(new Date(), 2)}
                        </div>

                        {/* 수량 컨트롤 (가운데 숫자 얇고 연하게) */}
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
                          <button
                            onClick={() => dispatch({ type: "DEC", id: it.id })}
                            style={{
                              width: 32,
                              height: 32,
                              border: "1px solid rgba(0,0,0,0.15)",
                              background: "transparent",
                              lineHeight: "30px",
                            }}
                            aria-label="수량 감소"
                          >
                            −
                          </button>
                          <div
                            style={{
                              width: 32,
                              textAlign: "center",
                              fontWeight: 500,          // 더 얇게
                              color: "rgba(0,0,0,0.55)" // 연한 색
                            }}
                          >
                            {it.qty}
                          </div>
                          <button
                            onClick={() => dispatch({ type: "INC", id: it.id })}
                            style={{
                              width: 32,
                              height: 32,
                              border: "1px solid rgba(0,0,0,0.15)",
                              background: "transparent",
                              lineHeight: "30px",
                            }}
                            aria-label="수량 증가"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* 가격 + 삭제 (테두리 없는 버튼) */}
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontWeight: 700 }}>{numberFormat(it.price * it.qty)}원</div>
                        {it.fee ? (
                          <div style={{ fontSize: 12, color: "rgba(0,0,0,0.5)", marginTop: 4 }}>
                            수수료 {numberFormat((it.fee || 0) * it.qty)}원
                          </div>
                        ) : null}
                        <button
                          onClick={() => dispatch({ type: "REMOVE", id: it.id })}
                          style={{
                            marginTop: 10,
                            border: "none",
                            background: "transparent",
                            color: "rgba(0,0,0,0.65)",
                            textDecoration: "underline",
                            padding: 0,
                            cursor: "pointer",
                          }}
                          aria-label="상품 삭제"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ModalBodyStyled>

           <ModalFooterStyled>
  <div style={{ marginRight: "auto", fontSize: 14, opacity: 0.85 }}>
    총 {itemCount}개 · {numberFormat(totals.total)}원
  </div>

  {/* 하단 버튼을 결제하기 + 호버 효과 */}
  <button
    type="button"
    onClick={() => {
      setOrderOpen(false);
      setToast("(데모) 결제 플로우로 이동");
    }}
    style={{
      padding: "10px 14px",
      border: "1px solid rgba(0,0,0,0.85)",
      background: "#111",
      color: "#fff",
      borderRadius: 8,
      cursor: "pointer",
      transition: "background 160ms ease, color 160ms ease, box-shadow 160ms ease"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#000";
      e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.12)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "#111";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    결제하기
  </button>
</ModalFooterStyled>

          </ModalContentStyled>
        </ModalOverlayStyled>
      )}

      {/* 간단 토스트 (자동 닫힘) */}
      {toast ? (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 96,
            background: "rgba(0,0,0,0.85)",
            color: "#fff",
            padding: "8px 12px",
            fontSize: 12,
          }}
        >
          {toast}
        </div>
      ) : null}
    </ContainerStyled>
  );
};

export default CartPage;
