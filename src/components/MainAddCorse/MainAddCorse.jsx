import React from "react";
import { MessageOutlined } from "@ant-design/icons";
import {
  StyledHome,
  ContainerImage,
  AddDescription,
  StyledLink,
  Image,
  DescText,
  Container,
  AddTitle,
  ContainerText,
} from "./style";
import imagemain from "../../assets/original-be9f4c8d2ca9bbfdfeffc1b677b99fab.webp";

export const MainAddCorse = () => {
  return (
    <StyledHome>
      <ContainerImage>
        <Image src={imagemain} alt="Kid" />
      </ContainerImage>
      <Container>
        <ContainerText>
          <AddTitle>Хотите разместить ваши курсы на нашем сайте?</AddTitle>
          <AddDescription>
            <DescText>
              Вы можете заполнить форму,оставив ваши контактные данные, и мы
              свяжемся с вами в ближайщее время.
            </DescText>
          </AddDescription>
        </ContainerText>
        <StyledLink to="/hackathon-2022-front/contact">
          <MessageOutlined />
          Связаться с нами
        </StyledLink>
      </Container>
    </StyledHome>
  );
};
