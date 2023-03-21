import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;
const TodoList = () => {
  return (
    <List>
      {[
        { title: "work hfdhd", isCompleted: false },
        { title: "work 54235", isCompleted: true },
        { title: "work hgg", isCompleted: false },
        { title: "work rytr", isCompleted: true },
        { title: "work rfestre", isCompleted: false },
        { title: "jhtjy", isCompleted: false },
      ].map((el, i) => {
        return <TodoItem key={i} el={el} />;
      })}
    </List>
  );
};

export default TodoList;
