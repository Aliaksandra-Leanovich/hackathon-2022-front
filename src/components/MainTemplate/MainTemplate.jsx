import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Container, StyledMainTeplate } from "./style";

export const MainTemplate = () => {
  return (
    <StyledMainTeplate>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </StyledMainTeplate>
  );
};
