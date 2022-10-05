import { StyledNav, NavItem } from "./style";

export const Nav = () => {
  return (
    <StyledNav>
      <NavItem to="/hackathon-2022-front">Главная</NavItem>
      <NavItem to="/hackathon-2022-front/all-corses">Все Курсы</NavItem>
      <NavItem to="/hackathon-2022-front/about">О Нас</NavItem>
    </StyledNav>
  );
};
