import styled from "styled-components";

import TodoItem from "./TodoItem";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 20px;
`;

const TodoList = ({ todoList, refreshData = async () => {} }) => {
  return (
    <List>
      {todoList.map((el) => {
        return (
          <TodoItem
            refreshData={async () => await refreshData()}
            key={el.id}
            el={el}
          />
        );
      })}
    </List>
  );
};

export default TodoList;
