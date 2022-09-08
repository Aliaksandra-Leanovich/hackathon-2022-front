import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5px;
  padding: 24px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;

  width: 100px;
  padding: 6px 0;

  border: none;
  border-radius: 15px;

  color: #f7ede2;
  background-color: #ff9500;

  &:active {
    background-color: #ffbe0b;
  }
`;
export const Logo = styled.img`
  max-width: 48px;
`;

export const Title = styled.h2`
  letter-spacing: 1px;
`;
export const ContainerTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;
