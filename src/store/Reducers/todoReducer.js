import {ADD_TODO, DONE_TODO, DELETE_TODO} from "../Actions/actionTypes"

const initialState = {
  todos: [
    {name: 'First', done: false, id: 0},
    {name: 'Second', done: false, id: 1},
    {name: 'Third', done: false, id: 2},
  ]
}

export default function todoReducer(state = initialState, action) {

  switch (action.type) {

    case ADD_TODO:
      const todoNew = action.todoNew
      todoNew.id = state.todos.length + 1
      return {
        ...state,
        todos: [...state.todos, todoNew]
      }

    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => (
          (todo.id === action.id)
            ? {...todo, done: !todo.done}
            : todo
        ))
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }

    default:
      return state

  }
}