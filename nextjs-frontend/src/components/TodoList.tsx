import ITodo from "@/utils/interfaces/Todo.interface";

import TodoItem from "./TodoItem";

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
    <ul className="flex flex-wrap flex-grow gap-[20px]">
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
    </ul>
  );
};

export default TodoList;
