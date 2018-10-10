import React, { Component } from 'react';


class App extends Component{
  state = {
    name: 'homie',
    age:  '25'
  }
  render(){
    return (
      <div className="app-connect">
        <h1>Refuge wise</h1>
        <p>my name is {this.state.name} and I'm {this.state.age} old</p>
      </div>
    )
  }
}

export default App;