import Container from "@/components/Container";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Title from "@/components/Title";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <>
      <Header>Header</Header>
      <Section>
        <Container>
          <Title title={"Kari Morozova"} />
          <TodoList />
        </Container>
      </Section>
    </>
  );
}
