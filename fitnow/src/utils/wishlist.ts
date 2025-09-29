// src/utils/wishlist.ts
export type WishlistKind = "product" | "brand";

const withBase = (p: string) =>
    `${import.meta.env.BASE_URL}${p.replace(/^\/+/, "")}`;

const ICONS = {
    product: {
      off: withBase("images/bookmark-off.png"),
      on:  withBase("images/bookmark-on.png"),
    },
    brand: {
      off: withBase("images/bookmark-off.png"),
      on:  withBase("images/bookmark-on.png"),
    },
  } as const;

export function getWishlistIconSrc(kind: WishlistKind, active: boolean) {
  return active ? ICONS[kind].on : ICONS[kind].off;
}

export function getWishlistToast(kind: WishlistKind, willBeActive: boolean) {
  const target = kind === "product" ? "상품" : "브랜드";
  return willBeActive ? `${target} 위시리스트에 추가되었습니다.` : `${target} 위시리스트에서 제거되었습니다.`;
}
