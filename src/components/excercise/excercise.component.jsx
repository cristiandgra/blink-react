import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setExcerciseResults } from "../../store/excercise/excercise.action";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ExcerciseTitle,
  ExcerciseContainer,
  ExcerciseList,
  ExcerciseItem,
  ExcerciseItemNumber,
} from "./excercise.styles";

const numbers = [
  {
    id: "2",
    name: "nº3",
    isCorrectPosition: false,
  },
  {
    id: "3",
    name: "nº4",
    isCorrectPosition: false,
  },
  {
    id: "0",
    name: "nº1",
    isCorrectPosition: false,
  },
  {
    id: "4",
    name: "nº5",
    isCorrectPosition: false,
  },
  {
    id: "1",
    name: "nº2",
    isCorrectPosition: false,
  },
];

export const Excercise = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [numList, setNumList] = useState(numbers);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(numList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setNumList(items);
  }

  const handleSaveReults = () => {
    for (let i = 0; i < numList.length; i++) {
      if (numList[i].id === i.toString()) {
        numList[i].isCorrectPosition = true;
      } else {
        numList[i].isCorrectPosition = false;
      }
    }
    dispatch(setExcerciseResults(numList));
    navigate("/");
  };

  return (
    <ExcerciseContainer>
      <ExcerciseTitle>Ordena los números de menor a mayor 😁</ExcerciseTitle>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="numbers">
          {(provided) => (
            <ExcerciseList
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {numList.map(({ id, name }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <ExcerciseItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ExcerciseItemNumber>{name}</ExcerciseItemNumber>
                      </ExcerciseItem>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ExcerciseList>
          )}
        </Droppable>
      </DragDropContext>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={() => handleSaveReults()}
      >
        Guardar
      </Button>
    </ExcerciseContainer>
  );
};
