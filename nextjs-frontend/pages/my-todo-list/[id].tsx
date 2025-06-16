import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import styled from "styled-components";
import ITodo from "../../../shared/interfaces/Todo.interface";
import { todoListApi } from "../../../shared/utils/todoApi";
import Header from "../../src/components/Header";
import Section from "../../src/components/Section";
import Container from "../../src/components/Container";
import Title from "../../src/components/Title";


const Back = styled.div`
  margin-bottom: 40px;
  cursor: pointer;
`;

const Id = () => {
  const [todo, setTodo] = useState<ITodo>(null);
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
      <Header />
      <Section>
        <Container>
          <Back
            onClick={() => {
              router.push("/my-todo-list");
            }}
          >
            <IoIosArrowBack size={25} color={"teal"} />
          </Back>
          {todo && (
            <>
              <p>Task:</p>
              <Title title={todo.title} />
              <p>Is completed:</p>
              {todo.isCompleted ? (
                <Title title={"Task is completed"} />
              ) : (
                <Title title={"You should finish the task"} />
              )}
            </>
          )}
        </Container>
      </Section>
    </>
  );
};

export default Id;
