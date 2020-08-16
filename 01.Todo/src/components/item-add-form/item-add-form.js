import React, { Component } from "react";

import "./item-add-form.sass";

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdd(this.state.label);
  };

  render() {
    return (
      <form className="item-add-form" onSubmit={ this.onSubmit }>
        <input
          type="text"
          className="form-control item-add-form__input"
          onChange={ this.onLabelChange }
          placeholder="What need to be done"
        />
        <button className="item-add-form__button">Add item</button>
      </form>
    );
  }
}