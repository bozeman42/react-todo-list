import React, { Component } from 'react';
import '../style/App.css';
import ToDoList from './component-todo-list';
class App extends Component {


  render() {
    return (
      <div className="container">
        <ToDoList />
      </div>
    );
  }
}

export default App;
