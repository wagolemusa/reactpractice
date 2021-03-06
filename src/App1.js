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

// function to add data
  AddData = (savedata) =>{
    savedata.id = Math.random();
    let ningas = [...this.state.ningas, savedata];
    this.setState({
      ningas: ningas
    })

  }

  // function for deleting data
  deleteData =  (id) => {
    let Datadelete = this.state.ningas.filter(savedata =>{
      return savedata.id !== id
    });
    this.setState({
      ningas: Datadelete
    })
  }
  render(){
    return (
      <div className="app-connect">
        {/* <Dataapp /> */}
  
        <Nestapp deleteData={this.deleteData} ningas = {this.state.ningas} />
        <AddNiga AddData = {this.AddData} />
      </div>

    )
  }
}

export default App;