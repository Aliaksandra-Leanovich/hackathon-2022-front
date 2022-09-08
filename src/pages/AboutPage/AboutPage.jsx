import React from "react";
import styled from "styled-components";

export const AboutPage = () => {
  return (
    <Container>
      <Title>О Нас:</Title>
      <BlockInfo>
        <Position> PM</Position>
        <Name>Александр Михальчук</Name>
        <Position> DevOPS</Position>
        <Name>Дмитрий Родиошкин</Name>
        <Position> Front end</Position>
        <Name>Александра Леонович</Name>
        <Position> AQA</Position>
        <Name>Тимофей Бородич</Name>
        <Position> Back end</Position>
        <Name>Сергей Аньшин</Name>
      </BlockInfo>
      <Info>
        г. Минск ул. Тимирязева, 67, этаж 2, кабинет 227. Телефон: +1234567890
      </Info>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
`;
const Title = styled.p`
  font-size: 23px;
  font-weight: 600;
`;

const BlockInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;

  padding: 40px;

  margin-bottom: 40px;
`;
const Position = styled.p`
  font-size: 19px;
  font-weight: 400;
  line-height: 19px;

  color: #3c4041;
`;
const Name = styled.p`
  font-size: 21px;
  font-weight: 500;
`;

const Info = styled.div`
  color: #9bb5bc;
`;
