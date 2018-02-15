import todoReducer from './reducer-to-dos';
import {combineReducers} from 'redux'
export default combineReducers( {
  todos: todoReducer
})