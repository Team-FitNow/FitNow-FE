import {
  HeaderContainer,
  HeaderTop,
  HeaderBottom,
  LeftNav,
  RightNav,
  Logo,
  NavItem,
  CategoryMenu,
  HighlightItem,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTop>
        <LeftNav>
          <NavItem>알림센터</NavItem>
          <NavItem>응모</NavItem>
          <NavItem>매장 정보</NavItem>
          <NavItem>에디토리얼</NavItem>
        </LeftNav>

        <Logo>FitNow</Logo>

        <RightNav>
          <NavItem>검색</NavItem>
          <NavItem>관심목록</NavItem>
          <NavItem>장바구니</NavItem>
          <NavItem>로그인</NavItem>
        </RightNav>
      </HeaderTop>

      <HeaderBottom>
        <CategoryMenu>
          <NavItem>남성</NavItem>
          <NavItem>여성</NavItem>
          <NavItem>생활</NavItem>
          <NavItem>브랜드</NavItem>
          <HighlightItem>세일</HighlightItem>
        </CategoryMenu>
      </HeaderBottom>
    </HeaderContainer>
  );
};

export default Header;
