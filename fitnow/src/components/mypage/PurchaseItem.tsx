import React from "react";
import { PurchaseItemStyled, ProductImageStyled, ProductInfoStyled, ProductNameStyled, ProductSizeStyled, StatusStyled } from "./PurchaseItem.styled";

interface PurchaseItemProps {
  image: string;
  name: string;
  size?: string;
  status: string;
  statusColor: "error" | "secondary";
}

export const PurchaseItem: React.FC<PurchaseItemProps> = ({
  image,
  name,
  size,
  status,
  statusColor,
}) => {
  return (
    <PurchaseItemStyled>
      <ProductImageStyled>{image}</ProductImageStyled>
      <ProductInfoStyled>
        <ProductNameStyled>{name}</ProductNameStyled>
        {size && <ProductSizeStyled>Size: {size}</ProductSizeStyled>}
      </ProductInfoStyled>
      <StatusStyled $statusColor={statusColor}>{status}</StatusStyled>
    </PurchaseItemStyled>
  );
};
