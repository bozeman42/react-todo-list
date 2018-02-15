import React, {Component} from 'react';
import ToDoItem from './component-todo-item';
import {connect} from 'react-redux';
import {fetchTodos} from '../actions';


class ToDoList extends Component {

  componentDidMount(){
    this.props.fetchTodos();
  }

  renderToDos(){
    const {todos} = this.props;
    return todos.map(todo => {
      return (
          <ToDoItem item={todo} key={todo.id} />
      )
    })
  }

  render() {
    return (
      <ul>
        {this.renderToDos()}
      </ul>
    )
  }



}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps,{fetchTodos})(ToDoList);