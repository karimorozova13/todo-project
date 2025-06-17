import { useEffect, useState } from "react";
import { MdAddAPhoto } from "react-icons/md";

import { todoListApi } from "@/utils/utils/todoApi";
import { authApi } from "@/utils/utils/authApi";
import ITodo from "@/utils/interfaces/Todo.interface";

import Header from "@/components/Header";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Title from "@/components/Title";
import TodoList from "@/components/TodoList";
import Modal from "@/components/Modal";
import Loader from "@/components/Loader";

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
            <div className="flex flex-col items-center gap-[30px] mb-[30px]">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden flex items-center justify-center relative bg-[#ccc]">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={"User avatar"}
                    className="w-full h-full"
                  />
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
                  className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
                />
              </div>
              <Title title={owner.userName} />
            </div>
          )}

          <TodoList
            token={token}
            refreshData={fetchTodoList}
            todoList={todoList}
          />
          <button
            className="px-[7px] min-h-[40px] w-[290px] block ml-auto mt-[100px] bg-teal-500 text-white border border-teal-500 rounded-md cursor-pointer transition-all duration-[250ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white hover:text-teal-500"
            onClick={() => setIsAddNewTask(true)}
          >
            {"Add new task"}
          </button>
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
