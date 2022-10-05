import React from "react";
import {
  MainCardsContainer,
  ContainerAllCorses,
  Container,
  ContainerCors,
  CorsPic,
  CorsName,
  CorseDesc,
  StyledLink,
  BackContainer,
} from "./style";
import corsesData from "../../corses-data.json";

export const MainCardsCorses = () => {
  return (
    <MainCardsContainer>
      <Container>
        <ContainerAllCorses>
          {corsesData.map((corse) => {
            if (corse.type === "braingame") {
              return (
                <ContainerCors>
                  <CorsPic src={corse.picture} alt={corse.name} />
                  <CorsName>{corse.name}</CorsName>
                  <CorseDesc> {corse.desc}</CorseDesc>
                </ContainerCors>
              );
            }
          })}
          {corsesData.map((corse) => {
            if (corse.type === "art") {
              return (
                <ContainerCors>
                  <CorsPic src={corse.picture} alt={corse.name} />
                  <CorsName>{corse.name}</CorsName>
                  <CorseDesc> {corse.desc}</CorseDesc>
                </ContainerCors>
              );
            }
          })}
        </ContainerAllCorses>
        <StyledLink to="/hackathon-2022-front/all-corses">
          Список Всех Курсов
        </StyledLink>
      </Container>

      <BackContainer />
    </MainCardsContainer>
  );
};
