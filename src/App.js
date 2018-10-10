import React, { Component } from 'react';


class App extends Component{
  state = {
    name: 'homie',
    age:  '25'
  }
  
  // function which anable  to click
  handleClick = (e) => {
    // console.log(e.target);
   
    this.setState({
      name: 'wise',
      age: '30'
    });
    console.log(this.state);
  }

  // function which anable Mouse move over
  handleMouseOver = (e) =>{
    console.log(e.target, e.pageX)
  }
  // function sends you massege when your copying 
  handleCopy = (e) => {
    console.log('Try beign original for once!');
  }

  render(){
    return (
      <div className="app-connect">
        <h1>Refuge wise</h1>
        <p>my name is {this.state.name} and I'm {this.state.age} old</p>

        <button onClick={this.handleClick}>Click Me</button>
        
        <button onMouseOver={this.handleMouseOver}>On mouse</button>

        <p onCopy={this.handleCopy}>What do you think, you want to be came</p>
      </div>
    )
  }
}

export default App;