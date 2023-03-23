import axios from "axios";

const apiConfig = axios.create({
  baseURL: "http://localhost:3002/",
  headers: {},
});

export const todoListApi = {
  getAll: async () => {
    const res = await apiConfig.get("api/todoApi");
    return res.data.data.todos;
  },
  addNew: async (val) => {
    const res = await apiConfig.post("api/todoApi", {
      title: val,
      isCompleted: false,
    });
    return res.data;
  },
  updateOne: async (id, title, isCompleted) => {
    const res = await apiConfig.put(`api/todoApi/${id}`, {
      title,
      isCompleted,
    });
    return res.data;
  },
  deleteOne: async (id) => {
    const res = await apiConfig.delete(`/api/todoApi/${id}`);
    return res.data;
  },
};
