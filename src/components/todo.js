import React, {Component} from 'react'

export default class Todo extends Component {

  styles = () => {
    return {
      textDecoration: this.props.todo.done ? 'line-through' : 'none'
    }
  }

  render() {
    return (

      <li className="list-group-item">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input
                type="checkbox"
                checked={this.props.todo.done}
                onChange={() => this.props.onDone(this.props.todo.id)}
              />
            </div>
          </div>
          <div className='flex-grow-1' style={this.styles()}>
            <span
              type="text"
              className="form-control"
              onClick={() => this.props.onDone(this.props.todo.id)}
            >{this.props.todo.name}
            </span>
          </div>
          <button
            className='btn btn-danger'
            onClick={() => this.props.onDelete(this.props.todo.id)}
          >X
          </button>
        </div>
      </li>

    )
  }
}