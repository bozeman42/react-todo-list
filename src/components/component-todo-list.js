import React, {Component} from 'react';
import ToDoItem from './component-todo-item';
import {connect} from 'react-redux';
import {fetchTodos} from '../actions';


class ToDoList extends Component {

  componentDidMount(){
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        ToDoList!
        <ToDoItem item={this.props.todos}/>
      </div>
    )
  }



}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps,{fetchTodos})(ToDoList);