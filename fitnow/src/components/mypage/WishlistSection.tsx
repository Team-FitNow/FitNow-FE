import React, { useState, useCallback } from "react";
import {
  WishlistSectionStyled,
  SectionHeader,
  SectionTitle,
  MoreLink,
  ProductGrid,
} from "./WishlistSection.styled";
import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  image: string;
  brand: string;
  name: string;
  price: number;
  isQuickDelivery?: boolean;
}

interface WishlistSectionProps {
  products?: Product[];
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    image: "https://via.placeholder.com/200x200/cccccc/666666?text=New+Balance+530",
    brand: "New Balance",
    name: "New Balance 530 Steel Grey",
    price: 117000,
    isQuickDelivery: true,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/200x200/cccccc/666666?text=Adidas+Adizero",
    brand: "Adidas",
    name: "Adidas Adizero EVO SL Cloud White Core Black",
    price: 169000,
    isQuickDelivery: true,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/200x200/cccccc/666666?text=Pop+Mart+Labubu",
    brand: "Pop Mart",
    name: "Pop Mart Labubu The Monsters Highlight Series Sealed Case (Bundle of 2/...)",
    price: 60000,
  },
  {
    id: 4,
    image: "https://via.placeholder.com/200x200/cccccc/666666?text=Pop+Mart+Keyring",
    brand: "Pop Mart",
    name: "Pop Mart Labubu The Monsters Highlight Series Serenity Keyring (Opened...)",
    price: 29000,
  },
  {
    id: 5,
    image: "https://via.placeholder.com/200x200/cccccc/666666?text=Coca+Cola+Keyring",
    brand: "Pop Mart",
    name: "Pop Mart Labubu Coca Cola Series Surprise Shake Keyring (Opened Case)",
    price: 62000,
  },
  {
    id: 6,
    image: "https://via.placeholder.com/200x200/cccccc/666666?text=ID+Keyring",
    brand: "Pop Mart",
    name: "Pop Mart Labubu The Monsters Highlight Series ID Keyring (Opened Case)",
    price: 184000,
  },
  {
    id: 7,
    image: "https://via.placeholder.com/200x200/cccccc/666666?text=Levi's+x+Nike",
    brand: "Levi's",
    name: "Levi's x Nike Trucker Jacket Light Blue",
    price: 795000,
    isQuickDelivery: true,
  },
  {
    id: 8,
    image: "https://via.placeholder.com/200x200/cccccc/666666?text=On+Running",
    brand: "On Running",
    name: "On Running x Post Archive Faction (Paf) Cloudmonster 2 Thorn Brown",
    price: 417000,
    isQuickDelivery: true,
  },
];

export const WishlistSection: React.FC<WishlistSectionProps> = ({
  products = MOCK_PRODUCTS,
}) => {
  const [items, setItems] = useState<Product[]>(products);

  const handleRemove = useCallback((id: number) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return (
    <WishlistSectionStyled>
      <SectionHeader>
        <SectionTitle>관심 상품</SectionTitle>
        <MoreLink href="#">더보기 &gt;</MoreLink>
      </SectionHeader>
      
      <ProductGrid>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            brand={product.brand}
            name={product.name}
            price={product.price}
            isQuickDelivery={product.isQuickDelivery}
            onRemove={() => handleRemove(product.id)}
          />
        ))}
      </ProductGrid>
    </WishlistSectionStyled>
  );
};
