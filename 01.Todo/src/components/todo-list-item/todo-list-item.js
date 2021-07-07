import React from 'react';

import './todo-list-item.sass';

const TodoListItem = (props) => {

  const { label, onDeleted, onToggleDone, onToggleImportant, important, done } = props;

  let classNames = 'todo-list-item'

  if(done) {
    classNames += ' done'
  }

  if(important) {
    classNames += ' important'
  }

  return (
    <div className={ classNames }>
        <span
          className="todo-list-item__label"
          onClick={ onToggleDone }
        >
          { label }
        </span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right todo-list-item__button"
        onClick={ onToggleImportant }
      >
        <i className="fa fa-exclamation"/>
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right todo-list-item__button"
        onClick={ onDeleted }
      >
        <i className="fa fa-trash-o"/>
      </button>
    </div>
  );
}

export default TodoListItem;
