// import { NavLink } from 'react-router-dom';
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
          <NavLinkStyled to="/" activeClassName="active">
            Home
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/catalog" activeClassName="active">
            Catalog
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/favorites" activeClassName="active">
            Favorites
          </NavLinkStyled>
        </NavItem>
      </NavList>
    </HeaderContainer>
  );
};

export default Header;