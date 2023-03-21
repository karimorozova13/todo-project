import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdModeEditOutline, MdDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

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
  @media only screen and (max-width: 991px) {
    width: calc(100% / 2 - 20px / 2);
  }
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;
const ItemTitle = styled.h3`
  font-size: 16px;
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
`;
const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
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

const TodoItem = ({ el, deleteTodo }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [todo, setTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setTodo(el.title);
    setIsCompleted(el.isCompleted);
  }, []);

  const saveTodo = (val) => {
    setTodo(val);
    setIsEdit(false);
    console.log(val);
    console.log(todo);
  };
  return (
    <Item>
      <ItemTitle isCompleted={isCompleted}>{todo}</ItemTitle>
      <CheckBoxWrap onClick={() => setIsCompleted(!isCompleted)}>
        <CustomCheckBox>
          {isCompleted && <MdDone color="green" size={20} />}
        </CustomCheckBox>
        <p>{"Complete task"}</p>
      </CheckBoxWrap>
      <Buttons>
        <Btn
          onClick={() => {
            setIsEdit(true);
          }}
        >
          <MdModeEditOutline />
        </Btn>
        <Btn
          onClick={() => {
            deleteTodo(el.id);
          }}
        >
          <AiOutlineDelete />
        </Btn>
      </Buttons>
      {isEdit && <Modal todo={todo} updateTodo={(value) => saveTodo(value)} />}
    </Item>
  );
};

export default TodoItem;
