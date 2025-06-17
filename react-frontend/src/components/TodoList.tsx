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
        { title: "work hfdhd", isCompleted: false, id: 1 },
        { title: "work 54235", isCompleted: true, id: 2 },
        { title: "work hgg", isCompleted: false, id: 3 },
        { title: "work rytr", isCompleted: true, id: 4 },
        { title: "work rfestre", isCompleted: false, id: 5 },
        { title: "jhtjy", isCompleted: false, id: 6 },
      ].map((el, i) => {
        return <TodoItem key={i} el={el} />;
      })}
    </List>
  );
};

export default TodoList;
