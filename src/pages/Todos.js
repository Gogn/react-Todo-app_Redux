import React, {Component} from 'react'
import Todo from "../components/todo";
import {add, done, remove} from "../store/Actions/actions";
import {connect} from "react-redux";

class Todos extends Component {

  state = {
    todoNew: {}
  }


  addTodoHandler = (event) => {
    this.setState({
      todoNew: {name: event.target.value, done: false}
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.todoNew)
  }

  render() {
    return (
      <>
        <div className='row'>
          <div className="col text-center">
            <h1 className='mb-4'>Todo list</h1>
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className="col-8">
            <ul className="list-group mb-4">
              {this.props.todos.map((todo, id) => (
                <Todo
                  todo={todo}
                  key={id}
                  onDone={this.props.onDone}
                  onDelete={this.props.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>

        <form className='row justify-content-center' onSubmit={this.onSubmit}>
            <div className="col-10 input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Describe what you want to do"
                onChange={this.addTodoHandler}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-success"
                  type="submit"
                >Add todo
                </button>
              </div>
            </div>
        </form>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todoReducer.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: todoNew => dispatch(add(todoNew)),
    onDelete: id => dispatch(remove(id)),
    onDone: id => dispatch(done(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Todos)