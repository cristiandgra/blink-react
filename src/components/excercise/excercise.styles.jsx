import styled from "styled-components";

export const ExcerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1.5vmin);
  text-align: center;
`;

export const ExcerciseTitle = styled.h1`
  text-align: center;
`;

export const ExcerciseList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const ExcerciseItem = styled.li`
  display: flex;
  align-items: center;
  border: solid 2px #d0d0d0;
  border-radius: 0.2em;
  padding: 0.5em 0.8em 0.5em 0.5em;
  margin-bottom: 1em;
`;

export const ExcerciseItemNumber = styled.p`
  max-width: none;
  font-weight: bold;
  margin: 0;
`;
