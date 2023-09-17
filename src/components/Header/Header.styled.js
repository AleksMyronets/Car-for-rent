import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #f0f0f0; /* Світлий фон */
  color: #fff; /* Колір тексту */
  padding: 10px 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center; /* Вирівнювання по центру горизонталі */
  align-items: center; /* Вирівнювання по центру вертикалі */
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
    color: #0074cc; /* Колір при наведенні */
  }

  &.active {
    font-weight: bold; /* Стиль для активного посилання */
  }
`;

export {
  HeaderContainer,
  NavList,
  NavItem,
  NavLinkStyled,
} 