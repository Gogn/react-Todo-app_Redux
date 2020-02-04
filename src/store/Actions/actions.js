import { ADD_TODO, DONE_TODO, DELETE_TODO } from "./actionTypes"

export function add(todoNew) {
  return {
    type: ADD_TODO,
    todoNew
  }
}

export function done(id) {
  return {
    type: DONE_TODO,
    id
  }
}

export function remove(id) {
  return {
    type: DELETE_TODO,
    id
  }
}