import axios from "axios";
import ITodo from "../interfaces/Todo.interface";

const apiConfig = axios.create({
  baseURL: "http://localhost:3003/",
  headers: {},
});

interface ITodoApi {
  getAll(token: string): Promise<ITodo[] | null>;
  addNew(val: string, token: string): Promise<ITodo>;
  updateOne(
    id: string,
    title: string,
    isCompleted: boolean,
    token: string
  ): Promise<ITodo>;
  deleteOne(id: string, token: string): Promise<ITodo>;
  getByid(
    id: string | string[],
    token: string
  ): Promise<{ data: { todo: ITodo } }>;
}
export const todoListApi: ITodoApi = {
  getAll: async (token) => {
    const res = await apiConfig.get("api/todoApi", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return res.data.data.todos;
  },

  addNew: async (val, token) => {
    const res = await apiConfig.post(
      "api/todoApi",
      {
        title: val,
        isCompleted: false,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  },

  updateOne: async (id, title, isCompleted, token) => {
    const res = await apiConfig.put(
      `api/todoApi/${id}`,
      {
        title,
        isCompleted,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  },

  deleteOne: async (id, token) => {
    const res = await apiConfig.delete(`/api/todoApi/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },

  getByid: async (id, token) => {
    const res = await apiConfig.get(`/api/todoApi/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },
};
