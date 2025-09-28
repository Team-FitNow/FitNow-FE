// src/pages/product/data.ts

export type Size = "XS" | "S" | "M" | "L";

export type Product = {
  brand: string;
  name: string;
  koName?: string;
  sku?: string;
  price: number;
  color?: string;
  fit?: { hw: string; wearing: Size };
  sizes?: Size[];
  images?: string[];
  img?: string;
};

export type RecentItem = {
  badge?: string;
  brand: string;
  name: string;
  price: number | null;
  img: string;
  soldout: boolean;
};


export const currency = (n: number) => n.toLocaleString("ko-KR");

export const PRODUCT: Product & {
  sizes: Size[];
  images: string[];
  fit: { hw: string; wearing: Size };
  color: string;
  sku: string;
} = {
  brand: "BEACH BRAINS",
  name: "TOUR ZIP HOOD",
  koName: "투어 집 후디 차콜",
  sku: "B025FWSWHO00003001",
  price: 278000,
  color: "CHARCOAL",
  fit: { hw: "185cm / 65kg", wearing: "M" },
  sizes: ["XS", "S", "M", "L"],
  images: [
    "https://media.worksout.co.kr/uploads/live/B025FWSWHO00003001/B025FWSWHO00003001-1.jpg",
    "https://media.worksout.co.kr/uploads/live/B025FWSWHO00003001/B025FWSWHO00003001-3.jpg",
    "https://media.worksout.co.kr/uploads/live/B025FWSWHO00003001/B025FWSWHO00003001-20.jpg"
  ],
};

export const WITH_ITEMS: Product[] = [
  {
    brand: "BEACH BRAINS",
    name: "PLEATED WORK PANT",
    price: 360000,
    img: "https://media.worksout.co.kr/uploads/live/B025FWPAOT07282001/B025FWPAOT07282001-1.jpg",
  },
  {
    brand: "BEACH BRAINS",
    name: "BREAK BOMBER JACKET",
    price: 690000,
    img: "https://media.worksout.co.kr/resized/live/B025FWJAJL10548001/B025FWJAJL10548001-1.jpg",
  },
  {
    brand: "BEACH BRAINS",
    name: "FLOAT OVERSHIRT",
    price: 289000,
    img: "https://media.worksout.co.kr/resized/live/B025FWSWHO01178001/B025FWSWHO01178001-1.jpg",
  },
];

export const BRAND_PRODUCTS: Product[] = [
  { brand: "BEACH BRAINS", name: "BREAK BOMBER JACKET", price: 690000, img: "https://media.worksout.co.kr/resized/live/B025FWJAJL10548001/B025FWJAJL10548001-1.jpg" },
  { brand: "BEACH BRAINS", name: "TOUR ZIP HOOD", price: 278000, img: "https://media.worksout.co.kr/resized/live/B025FWSWHO00003001/B025FWSWHO00003001-1.jpg" },
  { brand: "BEACH BRAINS", name: "FLOAT OVERSHIRT", price: 289000, img: "https://media.worksout.co.kr/resized/live/B025FWSWHO01178001/B025FWSWHO01178001-1.jpg" },
  { brand: "BEACH BRAINS", name: "DEAD END SHIRT", price: 219000, img: "https://media.worksout.co.kr/resized/live/B025FWSHLS02383001/B025FWSHLS02383001-1.jpg" },
  { brand: "BEACH BRAINS", name: "DREAM TEE", price: 119000, img: "https://media.worksout.co.kr/resized/live/B025FWTSLS16381001/B025FWTSLS16381001-0.jpg" },
];

export const RECENT_PRODUCTS: RecentItem[] = [
  { badge: "신상품 회원전용", brand: "ADIDAS", name: "SAMBA BAPE", price: 209000, img: "https://picsum.photos/seed/recent1/1000/800", soldout: false },
  { badge: "회원전용", brand: "HUMAN MADE", name: "DENIM WORK JACKET PAST", price: 530000, img: "https://picsum.photos/seed/recent2/1000/800", soldout: false },
  { badge: "신상품 회원전용", brand: "ADIDAS", name: "SAMBA BAPE", price: null, img: "https://picsum.photos/seed/recent3/1000/800", soldout: true },
];

export const INVENTORY: Record<Size, number> = { XS: 3, S: 7, M: 4, L: 0 };
