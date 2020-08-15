import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.sass';

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li className="list-group-item todo-list__item" key={ id }>
        <TodoListItem { ...itemProps } onDeleted={ () => onDeleted(id) }></TodoListItem>
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;