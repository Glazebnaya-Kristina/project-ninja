import React from 'react';

import './app-header.sass';

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1 className="app-header__title">Todo List</h1>
      <h2 className="app-header__subtitle">{ toDo } more to do, { done } done</h2>
    </div>
  );
};

export default AppHeader;
