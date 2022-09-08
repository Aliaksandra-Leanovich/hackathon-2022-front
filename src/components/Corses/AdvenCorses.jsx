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

export const AdvenCorses = () => {
  return (
    <Container>
      <ContainerResult>
        <TitleRez>Результат:</TitleRez>
        <DescRez>
          Ваша стихия – адреналин, а главная черта – любознательность. Нужно
          удовлетворить оба этих начала. Подойдут путешествия, экстремальные
          виды спорта, рыбалка, охота.
        </DescRez>
        <VarRez>Несколько хобби, которые посвящены поискам приключений:</VarRez>
      </ContainerResult>
      <StyledCorsesList>
        {corsesData.map((corse) => {
          if (corse.type === "adventure") {
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
