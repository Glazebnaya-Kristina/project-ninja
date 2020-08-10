import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.sass';

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li className="list-group-item todo-list__item" key={ id }><TodoListItem { ...itemProps }></TodoListItem></li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;