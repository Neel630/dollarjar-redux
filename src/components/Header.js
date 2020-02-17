import React from 'react';
import { connect } from 'react-redux';
import { newNameAdder ,modifyPenalty, addNewPerson } from '../actions/index';

function Header (props){
    return(
        <div>
            <form>
                <p>Hii {props.loginname}</p>
                <p>Penalty : {props.penalty}</p>
                <input type="number" value={props.penalty} onChange = {(event)=>props.changePenalty(event)}></input>
                <br></br>
                <p>Total : {props.total}</p>
                <input placeholder="Enter Name" value={props.tempName} onChange={(event)=>props.newNameToAdd(event)}></input>
                <button onClick={(event)=>props.addPerson(event)}>Add Person</button>
            </form>
        </div>
    )
}


const mapStateToProps =(state) =>{
    
    return{
        loginname: state.userNameReducer.userName,
        penalty: state.personReducer.penalty,
        tempName:state.personReducer.tempname,
        total:state.personReducer.total
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        changePenalty:(event) => dispatch(modifyPenalty(event)),

        newNameToAdd:(event) => dispatch(newNameAdder(event)),

        addPerson:(event)=>dispatch(addNewPerson(event))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);