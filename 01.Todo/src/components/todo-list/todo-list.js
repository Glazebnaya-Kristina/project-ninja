import React from 'react';
import './todo-list.sass';
import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todos.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li className="list-group-item todo-list__item" key={ id }>
        <TodoListItem
          { ...itemProps }
          onDeleted={ () => onDeleted(id) }
          onToggleImportant={ () => onToggleImportant(id) }
          onToggleDone={ () => onToggleDone(id) }
        />
      </li>
    );
  });

  return (
    <div>
      <ul className="list-group todo-list">
        { elements }
      </ul>
    </div>
  )
    ;
};

export default TodoList;
