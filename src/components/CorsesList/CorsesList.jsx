import React, { useEffect, useState } from "react";
import { StyledCorsesList } from "./style";
import { CorseCard } from "../CorseCard/CorseCard";
import corsesData from "../../corses-data.json";

export const CorsesList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://ec2-3-83-175-175.compute-1.amazonaws.com:8080/courses`
      );
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, []);

  if (corsesData) {
    return (
      <StyledCorsesList>
        {corsesData.map((corse) => {
          return <CorseCard key={corse.id} corse={corse} />;
        })}
      </StyledCorsesList>
    );
  } else {
    return null;
  }
};
