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

export const HandCorses = () => {
  return (
    <Container>
      <ContainerResult>
        <TitleRez>Результат:</TitleRez>
        <DescRez>
          Ваша задача – внести в жизнь максимум уюта и тепла. Идеальные варианты
          - шитье, вязание, кулинария, вышивание, цветоводство.
        </DescRez>
        <VarRez>
          Список хобби посвященных рукоделию и создание интересных вещей своими
          руками:
        </VarRez>
      </ContainerResult>
      <StyledCorsesList>
        {corsesData.map((corse) => {
          if (corse.type === "handwork") {
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
