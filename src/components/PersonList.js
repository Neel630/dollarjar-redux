import React from 'react';
import { connect, useSelector } from 'react-redux';

const PersonList =(props)=>{

    
        return(
            <div className="container text-center">
                <p>{props.name}</p>
                <p>Value : {props.value}</p>
                <button onClick={props.addHandler}>Add</button>
                <button onClick={props.subHandler}>Sub</button>
            </div>
        )

}

export default PersonList;