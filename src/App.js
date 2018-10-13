import React, { Component } from 'react';
// import Dataapp from './Dataapp';
import Nestapp from './Nestapp'
import AddNiga from './AddNiga';

class App extends Component{

  state = {
    ningas:[
      { name: 'Ryu',  age: 30, belt: 'black', id: 1},
      { name: 'yoshi', age: 40, belt: 'green', id: 2},
      { name: 'Crystal', age: 25, belt: 'pink', id: 3}

    ]
  }
  render(){
    return (
      <div className="app-connect">
        {/* <Dataapp /> */}
  
        <Nestapp ningas = {this.state.ningas} />
        <AddNiga />
      </div>

    )
  }
}

export default App;