import React, { Component } from 'react';


class App extends Component{
  render(){
    return (
      <div className="app-connect">
        <h1>Refuge wise</h1>
        <p>{ Math.random() * 10 }</p>
      </div>
    )
  }
}

export default App;