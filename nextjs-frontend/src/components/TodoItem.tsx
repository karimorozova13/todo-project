import { useEffect, useState } from "react";
import { MdModeEditOutline, MdDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";

import ITodo from "@/utils/interfaces/Todo.interface";
import { todoListApi } from "@/utils/utils/todoApi";

import Modal from "./Modal";

interface IProps {
  el: ITodo;
  token: string;
  refreshData(): void;
}

const TodoItem = ({ el, token, refreshData = async () => {} }: IProps) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [todo, setTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setTodo(el.title);
    setIsCompleted(el.isCompleted);
  }, []);

  const saveTodo = async (val: string, isCompleted: boolean) => {
    try {
      setTodo(val);
      await todoListApi.updateOne(el._id, val, isCompleted, token);
    } catch (error) {
      console.log(error);
    } finally {
      setIsEdit(false);
    }
  };

  const deleteTodo = async () => {
    try {
      await todoListApi.deleteOne(el._id, token).then((res) => {
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className="list-none w-[calc(100%/3-40px/3)] shadow-[6px_5px_15px_1px_rgba(64,54,54,0.9)] rounded p-[10px] flex flex-col justify-between gap-[10px] max-[991px]:w-[calc(100%/2-20px/2)] max-[575px]:w-full">
      <h3 className={`text-[16px] ${isCompleted ? "line-through" : ""}`}>
        {todo}
      </h3>
      <div
        className="flex items-center gap-[5px] cursor-pointer"
        onClick={async () => {
          setIsCompleted(!isCompleted);
          await saveTodo(todo, !isCompleted);
        }}
      >
        <div className="flex items-center justify-center w-[20px] h-[20px] border border-[#ccc] bg-[#eee] rounded-[6px]">
          {isCompleted && <MdDone color="green" size={20} />}
        </div>
        <p>{"Complete task"}</p>
      </div>
      <Link
        className="text-blue-500 no-underline"
        href={`/my-todo-list/${el._id}`}
      >
        Read more
      </Link>
      <div className="ml-auto flex gap-[10px]">
        <button
          className="flex justify-center items-center rounded-full w-[30px] h-[30px] border border-[#ccc] outline-none bg-[#eee] cursor-pointer transition-colors duration-250 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:opacity-60 focus:bg-transparent focus:opacity-60"
          onClick={() => {
            setIsEdit(true);
          }}
        >
          <MdModeEditOutline />
        </button>
        <button
          className="flex justify-center items-center rounded-full w-[30px] h-[30px] border border-[#ccc] outline-none bg-[#eee] cursor-pointer transition-colors duration-250 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:opacity-60 focus:bg-transparent focus:opacity-60"
          onClick={async () => await deleteTodo()}
        >
          <AiOutlineDelete />
        </button>
      </div>
      {isEdit && (
        <Modal
          todo={todo}
          closeModal={() => setIsEdit(false)}
          updateTodo={async (value) => await saveTodo(value, isCompleted)}
        />
      )}
    </li>
  );
};

export default TodoItem;
