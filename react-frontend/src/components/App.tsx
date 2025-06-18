import { Routes, Route } from "react-router-dom";

import MyTodoList from "../pages/MyTodoList";
import NotFound from "../pages/NotFound";
import TodoDetails from "../pages/TodoDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/my-todo-list" element={<MyTodoList />} />
      <Route path="/my-todo-list/:todoId" element={<TodoDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
