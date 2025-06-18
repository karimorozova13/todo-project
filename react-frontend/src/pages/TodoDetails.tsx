import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { todoListApi } from "../utils/utils/todoApi";
import type ITodo from "../utils/interfaces/Todo.interface";

import Header from "../components/Header";
import Section from "../components/Section";
import Container from "../components/Container";
import Title from "../components/Title";

const Back = styled.div`
  margin-bottom: 40px;
  cursor: pointer;
`;

const TodoDetails = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ITodo>();

  const { todoId } = useParams();

  useEffect(() => {
    const getTodo = async () => {
      const token = localStorage.getItem("token");
      if (!todoId || !token) return;

      const todo = await todoListApi.getByid(todoId, token);
      setTodo(todo.data.todo);
    };
    if (todoId) {
      getTodo();
    }
  }, [todoId]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Back
            onClick={() => {
              navigate("/my-todo-list");
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

export default TodoDetails;
