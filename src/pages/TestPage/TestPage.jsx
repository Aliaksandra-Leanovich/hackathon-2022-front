import React, { useEffect, useState } from "react";
import Queshions from "../../components/Queshions/Queshions";
import queshionsData from "../../queshions-data.json";
import { Container, ContainerQueshions } from "./style";
import { ArtCorses } from "../../components/Corses/ArtCorses";
import { AdvenCorses } from "../../components/Corses/AdvenCorses";
import { BrainCorses } from "../../components/Corses/BrainCorses";
import { HandCorses } from "../../components/Corses/HandCorses";
import { SportCorses } from "../../components/Corses/SportCorses";

export const TestPage = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [points, setPoints] = useState(0);
  const [stop, setStop] = useState(false);

  const data = queshionsData.map((queshions) => ({
    id: queshions.id,
    question: queshions.question,
    answers: queshions.answers,
  }));

  const renderSwitch = (param) => {
    if (param >= 12 && param <= 20) {
      return <SportCorses />;
    } else if (param >= 21 && param <= 30) {
      return <ArtCorses />;
    } else if (param >= 31 && param <= 41) {
      return <HandCorses />;
    } else if (param >= 42 && param <= 52) {
      return <BrainCorses />;
    } else if (param >= 53 && param <= 60) {
      return <AdvenCorses />;
    }
  };
  const [queshions, setQueshionsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://ec2-3-83-175-175.compute-1.amazonaws.com:8080//questions`
      );
      const newData = await response.json();
      setQueshionsData(newData);
    };

    fetchData();
  }, []);

  if (data) {
    return (
      <div>
        <Container>
          {stop ? (
            renderSwitch(points)
          ) : (
            <ContainerQueshions>
              <Queshions
                data={data}
                points={points}
                setStop={setStop}
                setPoints={setPoints}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </ContainerQueshions>
          )}
        </Container>
      </div>
    );
  } else {
    return null;
  }
};
