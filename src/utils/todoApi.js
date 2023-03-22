import axios from "axios";

const apiConfig = axios.create({
  baseURL: "http://localhost:3002/",
  headers: {},
});

export const todoListApi = {
  getAll: async () => {
    const res = await apiConfig.get("http://localhost:3002/api/todoApi");
    return res.data;
  },
  addNew: async (val) => {
    const res = await apiConfig.post("http://localhost:3002/api/todoApi", {
      title: val,
    });
    return res.data;
  },
  updateOne: async (id, title, isCompleted) => {
    const res = await apiConfig.put(`http://localhost:3002/api/todoApi/${id}`, {
      title,
      isCompleted,
    });
    return res.data;
  },
  deleteOne: async (id) => {
    const res = await apiConfig.delete(
      `http://localhost:3002/api/todoApi/${id}`
    );
    return res.data;
  },
};
