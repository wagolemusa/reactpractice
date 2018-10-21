import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component{
  state = {
    todos:[
      {id:1, content: 'Buy same goods'},
      {id:2, content: 'Play cards'}
  ]
}

// function to delete todos.
deleteTodo = (id) => {
  const todos = this.state.todos.filter(todo => {
    return todo.id !==id
  });
  this.setState({
    todos
  })
}
  render(){
    return (
      <div className="app-connect container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>

    )
  }
}

export default App;