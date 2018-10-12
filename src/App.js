import React, { Component } from 'react';
import Dataapp from './Dataapp';
import Nestapp from './Nestapp'

class App extends Component{
  render(){
    return (
      <div className="app-connect">
        <Dataapp />
        <br/>
        <Nestapp />
      </div>

    )
  }
}

export default App;