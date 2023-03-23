import { useEffect, useState } from "react";
import styled from "styled-components";

import { todoListApi } from "../utils/todoApi";

import Container from "@/components/Container";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Section from "@/components/Section";
import Title from "@/components/Title";
import TodoList from "@/components/TodoList";

const Btn = styled.button`
  padding: 7px;
  min-height: 40px;
  width: 290px;
  display: block;
  margin-left: auto;
  margin-top: 100px;
  background-color: teal;
  color: #fff;
  border: 1px solid teal;
  border-radius: 6px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover,
  &:focus {
    background-color: #fff;
    color: teal;
  }
`;
const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [isAddNewTask, setIsAddNewTask] = useState(false);

  const fetchTodoList = async () => {
    try {
      const data = await todoListApi.getAll();

      setTodoList(data);
    } catch (error) {
      console.log(error);
    }
  };
  const addNewTask = async (val) => {
    try {
      const res = await todoListApi.addNew(val);
      await fetchTodoList();
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsAddNewTask(false);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <>
      <Header>Header</Header>
      <Section>
        <Container>
          <Title title={"Kari Morozova"} />
          <TodoList refreshData={fetchTodoList} todoList={todoList} />
          <Btn onClick={() => setIsAddNewTask(true)}>{"Add new task"}</Btn>
          {isAddNewTask && (
            <Modal
              closeModal={() => setIsAddNewTask(false)}
              updateTodo={async (val) => await addNewTask(val)}
              btnTitle={"Add Task"}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default Home;
