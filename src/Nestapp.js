import React from 'react';

// function
const  Nestapp = ({ ningas, deleteData}) => {

        // functin to display each data from array
        const ningasList = ningas.map(show => {
            return  show.age > 25 ? (
                <div className="nest" key={show.id}>
                    <div>Name: {show.name}</div><br/>
                    <div>Age:  {show.age}</div><br/>
                    <div>Balt: {show.belt}</div><br/>
                    <button onClick={ () => {deleteData(show.id)}}>Delete</button>
                </div>
            ): null;    
        })
        return (
            <div className="ninja">
                { ningasList}
            </div>
        )
    }

export default Nestapp;