import React from "react";
import { EnvironmentOutlined, LinkOutlined } from "@ant-design/icons";
import {
  CorseCardContainer,
  Image,
  InfoContainer,
  CorseName,
  CorseDesc,
  CorseAdress,
  CorsesUrl,
} from "./style";

export const CorseCard = ({ corse }) => {
  return (
    <CorseCardContainer key={corse.id}>
      <Image src={corse.picture} />
      <InfoContainer>
        <CorseName>{corse.name}</CorseName>
        <CorsesUrl href={corse.url}>
          <LinkOutlined />
          {corse.url}
        </CorsesUrl>
        <CorseAdress>
          <EnvironmentOutlined style={{ fontSize: "14px" }} />
          {corse.adress}
        </CorseAdress>
        <CorseDesc>{corse.desc}</CorseDesc>
      </InfoContainer>
    </CorseCardContainer>
  );
};
