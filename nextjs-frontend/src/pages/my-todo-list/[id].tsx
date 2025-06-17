import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import ITodo from "@/utils/interfaces/Todo.interface";
import { todoListApi } from "@/utils/utils/todoApi";

import Header from "../../components/Header";
import Section from "../../components/Section";
import Container from "../../components/Container";
import Title from "../../components/Title";

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
          <div
            className="mb-10 cursor-pointer"
            onClick={() => {
              router.push("/my-todo-list");
            }}
          >
            <IoIosArrowBack size={25} color={"teal"} />
          </div>
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
