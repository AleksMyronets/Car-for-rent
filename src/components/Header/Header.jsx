import {
  HeaderContainer,
  NavList,
  NavItem,
  NavLinkStyled,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/" className="active">
            Home
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/catalog" className="active">
            Catalog
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/favorites" className="active">
            Favorites
          </NavLinkStyled>
        </NavItem>
      </NavList>
    </HeaderContainer>
  );
};

export default Header;

