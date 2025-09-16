import React, { useState } from "react";
import * as S from "./MainHeader.styled";

const brandCategories = [
  "전체",
  "자켓",
  "티셔츠",
  "바지",
  "신발",
  "모자",
  "악세사리",
];

const MainHeader: React.FC = () => {
  // 현재 활성화된 메뉴와 카테고리를 상태로 관리
  const [activeNav] = useState("브랜드");
  const [activeCategory, setActiveCategory] = useState("전체");

  return (
    <S.MainHeaderContainer>
      {/* "브랜드"가 선택되었을 때만 하위 카테고리 메뉴 표시 */}
      {activeNav === "브랜드" && (
        <S.SubNavContainer>
          <S.BrandTitle>ASICS</S.BrandTitle>
          <S.CategoryContainer>
            {brandCategories.map((category) => (
              <S.CategoryLink
                key={category}
                href="#"
                $isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </S.CategoryLink>
            ))}
          </S.CategoryContainer>
        </S.SubNavContainer>
      )}
    </S.MainHeaderContainer>
  );
};

export default MainHeader;
