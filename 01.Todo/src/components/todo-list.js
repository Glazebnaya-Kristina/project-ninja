import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem label="Drink Coffee"></TodoListItem></li>
      <li><TodoListItem label="Build React App" important></TodoListItem></li>
    </ul>
  );
};

export default TodoList;