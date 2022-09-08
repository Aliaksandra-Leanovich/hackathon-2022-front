import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  width: 100%;
  padding: 40px;
  height: 500px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeTitle = styled.h2`
  font-size: 50px;

  margin-bottom: 7px;
`;

export const HomeDescription = styled.div`
  padding-left: 7px;

  border-left: 2px solid #ff9500;
`;
export const DescText = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;

  color: #a3bac3;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 17px;
  font-weight: 400;
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 210px;
  padding: 7px 30px;

  border: none;
  border-radius: 15px;

  background-color: #2667ff;
  color: white;

  &:hover {
    background-color: #072ac8;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// export const Image = styled.img`
//   height: 400px;
//   border-radius: 10px;
// `;

export const BlockPhoto = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5px;
  width: 300px;

  justify-content: center;
  align-items: center;
`;
export const ThreePhoto = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 5px;
  justify-content: center;
  align-items: center;
`;
export const ImageMain = styled.img`
  height: 410px;
  border-radius: 10px;
`;
export const ImageThree = styled.img`
  height: 133px;
  width: 133px;
  border-radius: 10px;
`;
