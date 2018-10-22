import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Todos from './Todos';
import AddTodos from './AddTodos';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Contant from './components/Contant';
import Home from './components/Home';

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
  // function to creacte tode
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
        
  }

  render(){
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Route exact path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contant} />


        <div className="app-connect container">

          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddTodos addTodo={this.addTodo} />

        </div>
      </div>

        </BrowserRouter>

    )
  }
}

export default App;