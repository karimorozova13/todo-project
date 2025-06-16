import styled from "styled-components";

import ITodo from "../../shared/interfaces/Todo.interface";
import TodoItem from "./TodoItem";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: 20px;
`;
interface IProps {
  todoList: ITodo[];
  token: string;
  refreshData(): void;
}
const TodoList = ({
  todoList,
  token,
  refreshData = async () => {},
}: IProps) => {
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
