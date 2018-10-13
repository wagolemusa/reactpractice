import React from 'react';

// function
const  Nestapp = ({ ningas }) => {

        // function for calling in array
        // const { ningas } = props;

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

export default Nestapp;