import React, { Component } from 'react';

class Nestapp extends Component {
    render(){
        const { name, age, belt } = this.props;
        return (
            <div className="nest">
                <div>Name: {name}</div>
                <div>Age:  {age}</div>
                <div>Balt: {belt}</div>
            </div>
        )
    }
} 
export default Nestapp;