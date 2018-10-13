import React, { Component } from 'react'

class Dataapp extends Component{
    state = {
      name: 'homie',
      age:  '25'
    }
  
    // function unable user to input in fields
    handleChange = (e) =>{
      this.setState({
        name: e.target.value,
      });
    }
  
    // function for submit form
    handleSubmit = (e) =>{
      e.preventDefault();
    }
  
    render(){
      return (
        <div className="app-connect">
          <h1>Refuge wise</h1>
          <p>my name is {this.state.name} and I'm {this.state.age} old</p>
  
          <form onSubmit={this.handleSubmit}> 
              <input type="text" onChange={this.handleChange}/><br/><br/>
              <button>Submit</button>
          </form>
  
        </div>
      )
    }
  }
  
  export default Dataapp;