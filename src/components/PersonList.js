import React from 'react';
import { connect, useSelector } from 'react-redux';

const PersonList =(props)=>{

    
        return(
            <div className="container">
                <p>{props.name}</p>
                <p>Value : {props.value}</p>
                <button >Add</button>
                <button >Sub</button>
            </div>
        )

}

export default PersonList;