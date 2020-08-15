import React, { Component } from "react";

import './todo-list-item.sass';

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState({
      done: true,
    })
  };

  onMarkImportant = () => {
    this.setState({
      important: true
    })
  };

  render() {
    const { label } = this.props;

    const { done, important } = this.state;

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
          onClick={ this.onLabelClick }
        >
          { label }
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right todo-list-item__button"
          onClick={ this.onMarkImportant }
        >
          <i className="fa fa-exclamation"/>
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm float-right todo-list-item__button">
          <i className="fa fa-trash-o"/>
        </button>
      </div>
    );
  }
}