import React, { Component } from 'react'

const Ninjas = (props) => {
    // when you make a functional component, you have to pass props as a parameter
    // when its class component props is already passed from parent component 
    // const {ninjas} = this.props works.
    // functional component doesnt require state and you cant use state
     const { ninjas, deleteNinja } = props;
        const ninjaList = ninjas.map(ninja => {
            return ninja.age > 20 ? (
                <div className="ninja" key={ninja.id}>
                    <div>Name:{ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    {/* Anonymous function. its gonna be invoked with only click event */}
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
                </div>
            ) : null;
        })
        return(
            <div className="ninja-list">
             {ninjaList}
            </div>
        )
}
 

export default Ninjas