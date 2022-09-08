import { StyledNav, NavItem } from "./style";

export const Nav = () => {
  return (
    <StyledNav>
      <NavItem to="/">Главная</NavItem>
      <NavItem to="/all-corses">Все Курсы</NavItem>
      <NavItem to="/about">О Нас</NavItem>
    </StyledNav>
  );
};
