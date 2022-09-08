import React from "react";
import corsesData from "../../corses-data.json";
import {
  Image,
  StyledCorsesList,
  CorseCardContainer,
  InfoContainer,
  CorseName,
  CorsesUrl,
  CorseDesc,
  CorseAdress,
  ContainerResult,
  TitleRez,
  DescRez,
  VarRez,
  Container,
} from "./style";

export const SportCorses = () => {
  return (
    <Container>
      <ContainerResult>
        <TitleRez>Результат:</TitleRez>
        <DescRez>
          Посвятив себя активному образу жизни, вы сможете удовлетворить
          природную потребность в движении. Подходящие хобби – йога, боевые
          искусства, плавание, бильярд, теннис, танцы.
        </DescRez>
        <VarRez>Список различных хобби посвященных спорту:</VarRez>
      </ContainerResult>
      <StyledCorsesList>
        {corsesData.map((corse) => {
          if (corse.type === "sport") {
            return (
              <CorseCardContainer>
                <Image src={corse.picture} alt={corse.name} />
                <InfoContainer>
                  <CorseName>{corse.name}</CorseName>
                  <CorsesUrl href={corse.url}>{corse.url}</CorsesUrl>
                  <CorseAdress>{corse.adress}</CorseAdress>
                  <CorseDesc>{corse.desc}</CorseDesc>
                </InfoContainer>
              </CorseCardContainer>
            );
          }
        })}
      </StyledCorsesList>
    </Container>
  );
};
