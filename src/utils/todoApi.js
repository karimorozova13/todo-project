import axios from "axios";

const apiConfig = axios.create({
  baseURL: "http://localhost:3002/",
  headers: {},
});

export const todoListApi = {
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
