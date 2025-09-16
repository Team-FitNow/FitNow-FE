import React from "react";
import { PurchaseHistoryStyled, SectionTitleStyled, StatsGridStyled, StatCardStyled, StatNumberStyled, StatLabelStyled, PurchaseListStyled } from "./PurchaseHistory.styled";
import { PurchaseItem } from "./index";

interface PurchaseStats {
  total: number;
  shipping: number;
  delivered: number;
}

interface PurchaseHistoryProps {
  stats?: PurchaseStats;
}

const MOCK_PURCHASES = [
  {
    id: 1,
    image: "👜",
    name: "Supreme Mesh Mini Duffle Bag Black - 25SS",
    size: undefined,
    status: "기한만료" as const,
    statusColor: "error" as const,
  },
  {
    id: 2,
    image: "👕",
    name: "Ader Error Sig; TRS Tag T-Shirt 01 Noir",
    size: "L",
    status: "배송완료" as const,
    statusColor: "secondary" as const,
  },
  {
    id: 3,
    image: "👕",
    name: "Stussy Pigment Dyed Classic Gear T-Shirt Natural",
    size: undefined,
    status: "기한만료" as const,
    statusColor: "error" as const,
  },
];

export const PurchaseHistory: React.FC<PurchaseHistoryProps> = ({
  stats = {
    total: 169,
    shipping: 151,
    delivered: 18,
  },
}) => {
  return (
    <PurchaseHistoryStyled>
      <SectionTitleStyled>구매 내역</SectionTitleStyled>
      
      <StatsGridStyled>
        <StatCardStyled>
          <StatLabelStyled>전체</StatLabelStyled>
          <StatNumberStyled>{stats.total}</StatNumberStyled>
        </StatCardStyled>
        <StatCardStyled>
          <StatLabelStyled>배송중</StatLabelStyled>
          <StatNumberStyled>{stats.shipping}</StatNumberStyled>
        </StatCardStyled>
        <StatCardStyled>
          <StatLabelStyled>배송완료</StatLabelStyled>
          <StatNumberStyled>{stats.delivered}</StatNumberStyled>
        </StatCardStyled>
      </StatsGridStyled>

      <PurchaseListStyled>
        {MOCK_PURCHASES.map((purchase) => (
          <PurchaseItem
            key={purchase.id}
            image={purchase.image}
            name={purchase.name}
            size={purchase.size}
            status={purchase.status}
            statusColor={purchase.statusColor}
          />
        ))}
      </PurchaseListStyled>
    </PurchaseHistoryStyled>
  );
};
