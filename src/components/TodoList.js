import styled from "styled-components";

import TodoItem from "./TodoItem";
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const TodoList = ({ todoList, deleteTodo }) => {
  return (
    <List>
      {todoList.map((el, i) => {
        return (
          <TodoItem deleteTodo={(id) => deleteTodo(id)} key={el.id} el={el} />
        );
      })}
    </List>
  );
};

export default TodoList;
