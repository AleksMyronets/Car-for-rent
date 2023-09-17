import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #f0f0f0; 
  color: #fff; 
  padding: 10px 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 20px;
  font-size: 1.2rem;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  transition: color 0.3s;

  &:hover {
    color: #0074cc; 
  }

  &.active {
    font-weight: bold; 
  }
`;

export {
  HeaderContainer,
  NavList,
  NavItem,
  NavLinkStyled,
} 