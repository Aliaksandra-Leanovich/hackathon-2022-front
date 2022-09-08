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

export const BrainCorses = () => {
  return (
    <Container>
      <ContainerResult>
        <TitleRez>Результат:</TitleRez>
        <DescRez>
          Вы нуждаетесь в максимальном интеллектуальном напряжении. Подходящие
          хобби - шахматы, изучение иностранных языков, доказательство теорем,
          разгадывание шарад и ребусов.
        </DescRez>
        <VarRez>Список интеллектуальных хобби:</VarRez>
      </ContainerResult>
      <StyledCorsesList>
        {corsesData.map((corse) => {
          if (corse.type === "braingame") {
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
