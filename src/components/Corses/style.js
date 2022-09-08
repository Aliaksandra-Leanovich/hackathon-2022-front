import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 20px;
`;
export const StyledCorsesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 40px;
`;
export const CorseCardContainer = styled.div`
  width: 600px;
  padding: 20px 30px;
  border: 3px solid #a06cd5;
  margin-bottom: 25px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  border-radius: 15px;

  transition: all 0.5s ease-out;
  &:hover {
    transform: translateY(-5px);
    border: 3px solid #ff9500;
  }
`;
export const Image = styled.img`
  width: 200px;
  height: 140px;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CorseName = styled.p`
  font-size: 21px;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 5px;
`;
export const CorseDesc = styled.p`
  font-size: 14px;
  font-weight: 300;

  color: #a3bac3;
`;

export const CorsesUrl = styled.a`
  color: #2667ff;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 4px;
  cursor: pointer;
`;
export const CorseAdress = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 4px;
`;

export const ContainerResult = styled.div`
  width: 100%;
`;
export const TitleRez = styled.p`
  font-size: 25px;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const DescRez = styled.p`
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #023047;
`;
export const VarRez = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 400;
  color: #023047;
`;
