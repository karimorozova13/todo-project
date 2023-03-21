import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  min-width: 500px;
  input {
    min-height: 40px;
    min-width: 200px;
    padding: 7px;
    background-color: transparent;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 4px;
  }
  @media only screen and (max-width: 575px) {
    min-width: 290px;
  }
`;
const Close = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
`;
const Title = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;
const SubmitBtn = styled.button`
  background-color: teal;
  color: #fff;
  border: 1px solid teal;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  min-width: 200px;
  min-height: 40px;
  box-sizing: border-box;
  margin-left: auto;
  border-radius: 4px;
  margin-top: 40px;
  transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover,
  &:focus {
    background-color: #fff;
    color: teal;
  }
`;

const Modal = ({ todo = "", updateTodo }) => {
  const [value, setValue] = useState(todo);
  return (
    <Backdrop>
      <ModalWrap>
        <Close onClick={() => updateTodo(value)}>
          <AiOutlineClose />
        </Close>
        <Title>{"Next up:"}</Title>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <SubmitBtn onClick={() => updateTodo(value)}>{"Edit"}</SubmitBtn>
      </ModalWrap>
    </Backdrop>
  );
};

export default Modal;
