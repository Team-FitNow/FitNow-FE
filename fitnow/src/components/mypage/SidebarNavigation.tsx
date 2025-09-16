import React from "react";
import { NavigationStyled, SectionStyled, SectionTitleStyled, NavItemStyled } from "./SidebarNavigation.styled";

export const SidebarNavigation: React.FC = () => {
  return (
    <NavigationStyled>
      <SectionStyled>
        <SectionTitleStyled>쇼핑 정보</SectionTitleStyled>
        <NavItemStyled href="#">구매 내역</NavItemStyled>
        <NavItemStyled href="#">관심</NavItemStyled>
      </SectionStyled>

      <SectionStyled>
        <SectionTitleStyled>내 정보</SectionTitleStyled>
        <NavItemStyled href="#">로그인 정보</NavItemStyled>
        <NavItemStyled href="#">프로필 관리</NavItemStyled>
        <NavItemStyled href="#">주소록</NavItemStyled>
        <NavItemStyled href="#">결제 정보</NavItemStyled>
      </SectionStyled>

    </NavigationStyled>
  );
};
