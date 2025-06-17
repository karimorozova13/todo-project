import React from "react";
import { useParams } from "react-router-dom";

const TodoDetails = () => {
  const { todoId } = useParams();
  return <div>Now showing product with id - {todoId}</div>;
};

export default TodoDetails;
