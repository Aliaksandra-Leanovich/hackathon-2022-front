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

export const ArtCorses = () => {
  return (
    <Container>
      <ContainerResult>
        <TitleRez>Результат:</TitleRez>
        <DescRez>
          Богатое воображение – Ваш «конек». Так «оседлайте» на выбор фотодело,
          рисование, создание сайтов, карвинг, написание стихов и прозы.
        </DescRez>
        <VarRez>Варианты творческих хобби:</VarRez>
      </ContainerResult>
      <StyledCorsesList>
        {corsesData.map((corse) => {
          if (corse.type === "art") {
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
