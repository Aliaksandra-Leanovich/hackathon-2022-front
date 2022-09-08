import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

import {
  StyledHome,
  ContainerImage,
  HomeDescription,
  StyledLink,
  DescText,
  Container,
  HomeTitle,
  ContainerText,
  BlockPhoto,
  ImageMain,
  ThreePhoto,
  ImageThree,
} from "./style";
import kidblue from "../../assets/kid-blue.jpeg";
import kidgreen from "../../assets/kid-green.jpeg";
import kidwhite from "../../assets/kid-white.jpeg";
import kidyellow from "../../assets/kid-yell.jpeg";

export const MainContent = () => {
  return (
    <StyledHome>
      <Container>
        <ContainerText>
          <HomeTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </HomeTitle>
          <HomeDescription>
            <DescText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </DescText>
          </HomeDescription>
        </ContainerText>
        <StyledLink to="/test">
          Пройти Тест
          <ArrowRightOutlined style={{ fontSize: "18px" }} />
        </StyledLink>
      </Container>
      <ContainerImage>
        <BlockPhoto>
          <ImageMain src={kidwhite} />
          <ThreePhoto>
            <ImageThree src={kidyellow} />
            <ImageThree src={kidgreen} />
            <ImageThree src={kidblue} />
          </ThreePhoto>
        </BlockPhoto>
      </ContainerImage>
    </StyledHome>
  );
};
