import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import Container from "../../components/Container";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Title from "../../components/Title";

import { todoListApi } from "../../utils/todoApi";
import styled from "styled-components";

const Back = styled.div`
  margin-bottom: 40px;
  cursor: pointer;
`;

const Id = () => {
  const [todo, setTodo] = useState({});
  const router = useRouter();

  const { id } = router.query;

  const getTodo = async () => {
    const token = localStorage.getItem("token");
    const todo = await todoListApi.getByid(id, token);
    setTodo(todo.data.todo);
  };

  useEffect(() => {
    if (id) {
      getTodo();
    }
  }, [id]);

  return (
    <>
      <Header>Header</Header>
      <Section>
        <Container>
          <Back
            onClick={() => {
              router.push("/my-todo-list");
            }}
          >
            <IoIosArrowBack size={25} color={"teal"} />
          </Back>
          <p>Task:</p>
          <Title title={todo.title} />
          <p>Is completed:</p>
          {todo.isCompleted ? (
            <Title title={"Task is completed"} />
          ) : (
            <Title title={"You should finish the task"} />
          )}
        </Container>
      </Section>
    </>
  );
};

export default Id;
