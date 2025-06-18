import styled from "styled-components";

import TodoItem from "./TodoItem";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  flex-grow: 1;
`;
interface TodoListProps {
  todoList: { title: string; isCompleted: boolean; _id: string }[];
  token: string;
  refreshData?: () => void;
}

const TodoList = ({
  todoList,
  token,
  refreshData = async () => {},
}: TodoListProps) => {
  return (
    <List>
      {todoList.map((el) => {
        return (
          <TodoItem
            token={token}
            refreshData={async () => await refreshData()}
            key={el._id}
            el={el}
          />
        );
      })}
    </List>
  );
};

export default TodoList;
