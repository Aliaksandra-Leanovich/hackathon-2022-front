import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainCardsContainer = styled.div`
  position: relative;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ContainerAllCorses = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
`;
export const ContainerCors = styled.div`
  padding: 10px;

  display: flex;
  flex-direction: column;

  height: 290px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

  transition: all 0.5s ease-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CorsPic = styled.img`
  height: 150px;

  border-radius: 10px;
  margin-bottom: 10px;
`;
export const CorsName = styled.p`
  font-size: 16px;
  letter-spacing: 1.5px;
  font-weight: 600;
  margin-bottom: 5px;
`;
export const CorseDesc = styled.p`
  font-size: 13px;
  font-weight: 300;

  color: #a3bac3;
  padding-top: 5px;
  border-top: 1px solid #ff9500;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-weight: 500;

  width: 180px;
  padding: 8px 0;

  border: none;
  border-radius: 15px;

  color: #f7ede2;
  background-color: #ff9500;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: #ffbe0b;
  }
`;

export const BackContainer = styled.div`
  position: absolute;
  top: 30%;
  z-index: -1;

  background-color: #a06cd5;
  border-radius: 15px;
  width: 100%;
  height: 270px;
`;
