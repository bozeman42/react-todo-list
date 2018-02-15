export const FETCH_TO_DOS = "fetch_todos";

const todos = [{
  id: 1,
  text: "An item",
  complete: false
},{
  id: 2,
  text: "Another item",
  complete: true
}];


export function fetchTodos(){
  return {
    type: FETCH_TO_DOS,
    payload: todos
  }
}