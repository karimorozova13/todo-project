import Container from "@/components/Container";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Title from "@/components/Title";
import TodoList from "@/components/TodoList";
import { useEffect, useState } from "react";

export default function Home() {
  const todoListDb = [
    { title: "work hfdhd", id: 1, isCompleted: false },
    { title: "work 54235", id: 2, isCompleted: true },
    { title: "work hgg", id: 3, isCompleted: false },
    { title: "work rytr", id: 4, isCompleted: true },
    { title: "work rfestre", id: 5, isCompleted: false },
    { title: "jhtjy", id: 6, isCompleted: false },
  ];
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    setTodoList(todoListDb);
  }, []);
  const deleteTodo = (id) => {
    setTodoList(todoListDb.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header>Header</Header>
      <Section>
        <Container>
          <Title title={"Kari Morozova"} />
          <TodoList deleteTodo={(id) => deleteTodo(id)} todoList={todoList} />
        </Container>
      </Section>
    </>
  );
}
