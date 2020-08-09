import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search"/>;
};

const App = () => {
  return (
    <div>
      <AppHeader></AppHeader>
      <SearchPanel></SearchPanel>
      <TodoList></TodoList>
    </div>
  );
}

ReactDOM.render(<App></App>, document.querySelector('#root'));