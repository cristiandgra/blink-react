import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectExcerciseResult } from "../../store/excercise/excercise.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ResultContainer,
  ResultTitle,
  ResultList,
  ResultItem,
  ResultItemNumber,
} from "./result.styles";

export const Result = () => {
  const navigate = useNavigate();
  const excerciseResult = useSelector(selectExcerciseResult);

  const numsOfCorrects = excerciseResult.filter(
    (item) => item.isCorrectPosition
  ).length;

  return (
    <ResultContainer>
      <ResultTitle>Resultados del ejercicio:</ResultTitle>
      <ResultList>
        {excerciseResult.map((item) => (
          <ResultItem
            style={{
              backgroundColor: item.isCorrectPosition ? "green" : "red",
            }}
            key={item.id}
          >
            <ResultItemNumber>{item.name}</ResultItemNumber>
          </ResultItem>
        ))}
      </ResultList>
      <p>Has acertado {numsOfCorrects}/5</p>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={() => navigate("/")}
      >
        Volver
      </Button>
    </ResultContainer>
  );
};
