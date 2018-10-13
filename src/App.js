import React, { Component } from 'react';
// import Dataapp from './Dataapp';
import Nestapp from './Nestapp'

class App extends Component{
  render(){
    return (
      <div className="app-connect">
        {/* <Dataapp /> */}
  
        <Nestapp  name ="pussycat" age="50" belt="black"/>
      </div>

    )
  }
}

export default App;