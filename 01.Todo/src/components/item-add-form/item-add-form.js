import React from "react";

import "./item-add-form.sass";

const ItemAddForm = ({ onItemAdd }) => {
  return (
    <button className="item-add-form" onClick={ () => onItemAdd('hi') }>Add item</button>
  );
}

export default ItemAddForm;