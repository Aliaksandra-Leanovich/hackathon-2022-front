import React from "react";
import { MainAddCorse } from "../../components/MainAddCorse/MainAddCorse";
import { MainCardsCorses } from "../../components/MainCardsCorses/MainCardsCorses";
import { MainContent } from "../../components/MainContent/MainContent";

export const HomePage = () => {
  return (
    <div>
      <MainContent />
      <MainCardsCorses />
      <MainAddCorse />
    </div>
  );
};
