import React, { useState } from "react";
import {
  CartContainerStyled,
  CartItemStyled,
  ProductImage,
  ProductInfo,
  ProductOption,
  ProductActions,
  CartButtonStyled,
  CartSummary,
  CheckoutButton,
  QuantityControl,
  QuantityButton,
  QuantityDisplay,
  RecommendationContainer,
  RecommendationTitle,
  RecommendationList,
  RecommendationItem,
  RecommendationImage,
} from "./cart.styled";

type CartItem = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
  option?: string;
};

type Recommendation = {
  id: number;
  name: string;
  price: number;
  img: string;
};

const Cart: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: "나이키 에어맥스", price: 120000, img: "/assets/product1.png", quantity: 1, option: "사이즈: 270" },
    { id: 2, name: "아디다스 울트라부스트", price: 150000, img: "/assets/product2.png", quantity: 2, option: "사이즈: 275" },
    { id: 3, name: "뉴발란스 990v5", price: 180000, img: "/assets/product3.png", quantity: 1, option: "사이즈: 260" },
  ]);

  const recommendations: Recommendation[] = [
    { id: 101, name: "컨버스 척테일러", price: 80000, img: "/assets/recommend1.png" },
    { id: 102, name: "반스 올드스쿨", price: 90000, img: "/assets/recommend2.png" },
    { id: 103, name: "푸마 RS-X", price: 95000, img: "/assets/recommend3.png" },
  ];

  const removeItem = (id: number) => setItems(items.filter((item) => item.id !== id));
  const changeQuantity = (id: number, delta: number) =>
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)));

  const addRecommendationToCart = (rec: Recommendation) => {
    const existing = items.find((item) => item.id === rec.id);
    if (existing) {
      setItems(items.map((item) => (item.id === rec.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setItems([...items, { id: rec.id, name: rec.name, price: rec.price, img: rec.img, quantity: 1 }]);
    }
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <CartContainerStyled>
        {items.map((item) => (
          <CartItemStyled key={item.id}>
            <ProductImage src={item.img} alt={item.name} />
            <ProductInfo>
              <span>{item.name}</span>
              {item.option && <ProductOption>{item.option}</ProductOption>}
              <span>{(item.price * item.quantity).toLocaleString()}원</span>
            </ProductInfo>
            <ProductActions>
              <QuantityControl>
                <QuantityButton onClick={() => changeQuantity(item.id, -1)}>-</QuantityButton>
                <QuantityDisplay>{item.quantity}</QuantityDisplay>
                <QuantityButton onClick={() => changeQuantity(item.id, 1)}>+</QuantityButton>
              </QuantityControl>
              <CartButtonStyled onClick={() => removeItem(item.id)}>삭제</CartButtonStyled>
            </ProductActions>
          </CartItemStyled>
        ))}
        <CartSummary>
          <span>총합:</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </CartSummary>
        <CheckoutButton>결제하기</CheckoutButton>
      </CartContainerStyled>

      <RecommendationContainer>
        <RecommendationTitle>추천 상품</RecommendationTitle>
        <RecommendationList>
          {recommendations.map((rec) => (
            <RecommendationItem key={rec.id} onClick={() => addRecommendationToCart(rec)}>
              <RecommendationImage src={rec.img} alt={rec.name} />
              <div>{rec.name}</div>
              <div>{rec.price.toLocaleString()}원</div>
            </RecommendationItem>
          ))}
        </RecommendationList>
      </RecommendationContainer>
    </>
  );
};

export default Cart;
