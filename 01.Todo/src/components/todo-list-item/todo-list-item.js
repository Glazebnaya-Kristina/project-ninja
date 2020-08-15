import React, { Component } from "react";

import './todo-list-item.sass';

export default class TodoListItem extends Component {

  state = {
    done: false
  };

  onLabelClick = () => {
    this.setState({
      done: true
    })
  }

  render() {
    const { label, important = false } = this.props;

    const { done } = this.state;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    let classNames = 'todo-list-item'

    if(done) {
      classNames += ' done'
    }

    return (
      <div className={ classNames }>
        <span
          className="todo-list-item__label"
          style={ style }
          onClick={ this.onLabelClick }
        >
          { label }
        </span>
        <button type="button" className="btn btn-outline-success btn-sm float-right todo-list-item__button">
          <i className="fa fa-exclamation"/>
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm float-right todo-list-item__button">
          <i className="fa fa-trash-o"/>
        </button>
      </div>
    );
  }
}