import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdModeEditOutline, MdDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import { todoListApi } from "../utils/utils/todoApi";

import Modal from "./Modal";

const Item = styled.li`
  list-style: none;
  width: calc(100% / 3 - 40px / 3);
  box-shadow: 6px 5px 15px 1px rgba(64, 54, 54, 0.9);
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  box-sizing: border-box;
  @media only screen and (max-width: 991px) {
    width: calc(100% / 2 - 20px / 2);
  }
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
  a {
    color: yellowgreen;
  }
`;
const ItemTitle = styled.h3<ItemTitleProps>`
  font-size: 16px;
  margin: 0;
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
`;
const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  p {
    margin: 0;
  }
`;
const CustomCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 6px;
`;
const Buttons = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
`;
const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  outline: none;
  background-color: #eee;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background-color: transparent;
    opacity: 0.6;
  }
`;

interface TodoItemProps {
  el: {
    _id: string;
    title: string;
    isCompleted: boolean;
  };
  token: string;
  refreshData?: () => void;
}
interface ItemTitleProps {
  isCompleted: boolean;
}

const TodoItem = ({
  el,
  token,
  refreshData = async () => {},
}: TodoItemProps) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [todo, setTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setTodo(el.title);
    setIsCompleted(el.isCompleted);
  }, [el.title, el.isCompleted]);

  const saveTodo = async (val: string, isCompleted: boolean) => {
    try {
      setTodo(val);
      const res = await todoListApi.updateOne(el._id, val, isCompleted, token);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsEdit(false);
    }
  };
  const deleteTodo = async () => {
    try {
      const res = await todoListApi.deleteOne(el._id, token);
      console.log(res);
      await refreshData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Item>
      <ItemTitle isCompleted={isCompleted}>{todo}</ItemTitle>
      <CheckBoxWrap
        onClick={async () => {
          setIsCompleted(!isCompleted);
          await saveTodo(todo, !isCompleted);
        }}
      >
        <CustomCheckBox>
          {isCompleted && <MdDone color="green" size={20} />}
        </CustomCheckBox>
        <p>{"Complete task"}</p>
      </CheckBoxWrap>
      <Link to={`/my-todo-list/${el._id}`}>Read more</Link>
      <Buttons>
        <Btn
          onClick={() => {
            setIsEdit(true);
          }}
        >
          <MdModeEditOutline />
        </Btn>
        <Btn onClick={async () => await deleteTodo()}>
          <AiOutlineDelete />
        </Btn>
      </Buttons>
      {isEdit && (
        <Modal
          todo={todo}
          closeModal={() => setIsEdit(false)}
          updateTodo={(value) => saveTodo(value, isCompleted)}
        />
      )}
    </Item>
  );
};

export default TodoItem;
