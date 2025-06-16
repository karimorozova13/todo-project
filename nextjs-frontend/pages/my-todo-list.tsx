import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdAddAPhoto } from "react-icons/md";

import ITodo from "../../shared/interfaces/Todo.interface";
import { todoListApi } from "../../shared/utils/todoApi";
import { authApi } from "../../shared/utils/authApi";
import Header from "../src/components/Header";
import Section from "../src/components/Section";
import Container from "../src/components/Container";
import Title from "../src/components/Title";
import TodoList from "../src/components/TodoList";
import Modal from "../src/components/Modal";
import Loader from "../src/components/Loader";

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
const Avatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #ccc;
  img {
    width: 100%;
    height: 100%;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
`;
const User = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

interface IOwner {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  token: string;
  avatarUrl: string;
  _id: string;
}
type TModal = boolean;
type TToken = string;
type TAvatarUrl = string;

const myTodoList = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [isAddNewTask, setIsAddNewTask] = useState<TModal>(false);
  const [token, setToken] = useState<TToken>("");
  const [owner, setOwner] = useState<IOwner>(null);
  const [avatarUrl, setAvatarUrl] = useState<TAvatarUrl>("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodoList = async () => {
    try {
      setIsLoading(true);
      const data = await todoListApi.getAll(token);
      setTodoList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchOwner = async () => {
    try {
      setIsLoading(true);

      const data = await authApi.current(token);
      setOwner(data);
      setAvatarUrl(data.avatarUrl);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addNewTask = async (val: string) => {
    try {
      setIsLoading(true);

      await todoListApi.addNew(val, token);
      await fetchTodoList();
    } catch (error) {
      console.log(error);
    } finally {
      setIsAddNewTask(false);
      setIsLoading(false);
    }
  };
  const setAvatar = async (file: File) => {
    try {
      setIsLoading(true);

      const avatar = new FormData();
      avatar.append("avatar", file);

      const newPath = await authApi.upload(token, avatar);

      setAvatarUrl(newPath.url);

      await fetchOwner();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const tokenLS = localStorage.getItem("token");

    setToken(tokenLS);
    if (token) {
      fetchTodoList();
      fetchOwner();
    }
  }, [token]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {owner && (
            <User>
              <Avatar>
                {avatarUrl ? (
                  <img src={avatarUrl} alt={"User avatar"} />
                ) : (
                  <>
                    <MdAddAPhoto />
                    <p>{"Upload photo"}</p>
                  </>
                )}

                <input
                  type={"file"}
                  name={"avatar"}
                  onChange={(e) => setAvatar(e.currentTarget.files[0])}
                />
              </Avatar>
              <Title title={owner.userName} />
            </User>
          )}

          <TodoList
            token={token}
            refreshData={fetchTodoList}
            todoList={todoList}
          />
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
      {isLoading && <Loader />}
    </>
  );
};

export default myTodoList;
