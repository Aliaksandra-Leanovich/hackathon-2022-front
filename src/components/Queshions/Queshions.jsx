import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerAnswers,
  ContainerBlock,
  Answer,
  Image,
  Queshion,
} from "./styles";

export default function Queshions({
  data,
  questionNumber,
  setQuestionNumber,
  setPoints,
  points,
  setStop,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    let value = a.correct;
    let sum = points + Number(value);

    setPoints(sum);
    console.log(sum);

    delay(800, () => {
      if (question.id < 12) {
        setStop(false);
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStop(true);
      }
    });
  };
  return (
    <Container>
      <div>
        <Queshion>{question?.question}</Queshion>
      </div>
      <ContainerBlock>
        <ContainerAnswers>
          {question?.answers.map((a) => (
            <Answer onClick={() => !selectedAnswer && handleClick(a)}>
              {a.text}
            </Answer>
          ))}
        </ContainerAnswers>

        <Image src="https://cdn.dribbble.com/users/1068771/screenshots/9805180/media/5dd8a906debc045b2d1beb1d9bc22fcf.gif" />
      </ContainerBlock>
    </Container>
  );
}
