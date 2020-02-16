import React from 'react';
import { connect, useSelector } from 'react-redux';
import border from './PersonList.css'

const PersonList =(props)=>{

    
        return(
            <div className="container text-center">
                <div className="border">
                <p>{props.name}</p>
                <p>Value : {props.value}</p>
                <button onClick={props.addHandler}>Add</button>
                <button onClick={props.subHandler}>Sub</button>
                </div>
            </div>
        )

}

export default PersonList;