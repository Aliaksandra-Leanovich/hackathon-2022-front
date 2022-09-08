import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 330px;
  width: 100%;
`;

export const NavItem = styled(Link)`
  font-weight: 600;
  font-size: 19px;
  line-height: 21px;
  letter-spacing: 1px;

  color: #2667ff;

  text-decoration: none;

  border-bottom: 3px solid transparent;
  transition: 0.5s linear;

  &:hover {
    border-bottom: 3px solid #2667ff;
  }
`;
