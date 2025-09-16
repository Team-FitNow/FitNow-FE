import React, { useState, useRef } from "react";
import {
  ProductCardStyled,
  ProductImageContainer,
  ProductImage,
  BookmarkIcon,
  ProductInfo,
  BrandName,
  ProductName,
  DeliveryBadge,
  PriceContainer,
  Price,
  PriceLabel,
} from "./ProductCard.styled";

interface ProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: number;
  isQuickDelivery?: boolean;
  onRemove?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  brand,
  name,
  price,
  isQuickDelivery = false,
  onRemove,
}) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("ko-KR");
  };

  const [isRemoving, setIsRemoving] = useState(false);
  const removeTimeoutRef = useRef<number | null>(null);

  return (
    <ProductCardStyled data-card isRemoving={isRemoving}>
      <ProductImageContainer>
        <ProductImage src={image} alt={name} />
        <BookmarkIcon
          onMouseEnter={(e) => {
            const card = (e.currentTarget.closest('[data-card]') as HTMLElement);
            if (card) card.classList.add('disable-hover');
          }}
          onMouseLeave={(e) => {
            const card = (e.currentTarget.closest('[data-card]') as HTMLElement);
            if (card) card.classList.remove('disable-hover');
          }}
          onClick={(e) => {
            e.stopPropagation();
            if (isRemoving) return;
            setIsRemoving(true);
            removeTimeoutRef.current = window.setTimeout(() => {
              onRemove?.();
            }, 200);
          }}
        >🔖</BookmarkIcon>
      </ProductImageContainer>
      
      <ProductInfo>
        <BrandName>{brand}</BrandName>
        <ProductName>{name}</ProductName>
        {isQuickDelivery && <DeliveryBadge>⚡ 빠른배송</DeliveryBadge>}
        
        <PriceContainer>
          <Price>{formatPrice(price)}원</Price>
          <PriceLabel>즉시 구매가</PriceLabel>
        </PriceContainer>
      </ProductInfo>
    </ProductCardStyled>
  );
};
