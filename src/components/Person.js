import React from 'react';
import './Person.css'

const Person =(props)=>{

        return(
            <div className="container text-center">
                <div className="border">
                    <p>{props.name}</p>
                    <p>Value : {props.value}</p>
                    <button onClick={props.addPenaltyHandler}>Add</button>
                    <button onClick={props.subPenaltyHandler}>Sub</button>
                </div>
            </div>
        )
}

export default Person;