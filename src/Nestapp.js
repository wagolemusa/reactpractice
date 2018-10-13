import React, { Component } from 'react';

class Nestapp extends Component {
    render(){

        // function for calling in array
        const { ningas } = this.props;

        // functin to display each data from array
        const ningasList = ningas.map(show => {
            return (
                <div className="nest" key={show.id}>
                <div>Name: {show.name}</div><br/>
                <div>Age:  {show.age}</div><br/>
                <div>Balt: {show.belt}</div><br/>
            </div>
            )
        })
        return (
            <div className="ninja">
                { ningasList}
            </div>
        )
    }
} 
export default Nestapp;