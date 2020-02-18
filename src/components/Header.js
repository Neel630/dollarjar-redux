import React from 'react';
import { connect } from 'react-redux';
import { newNameAdder ,modifyPenalty, addNewPerson } from '../actions/index';

function Header (props){
    return(
        <div>
            <form>
                <p>Hii {props.loginName}</p>
                <p>Penalty : {props.penalty}</p>
                <input type="number" value={props.penalty} onChange = {(event)=>props.changePenalty(event)}></input>
                <br></br>
                <p>Total : {props.total}</p>
                <input placeholder="Enter Name" value={props.newName} onChange={(event)=>props.newNameToAdd(event)}></input>
                <button onClick={(event)=>props.addPerson(event)}>Add Person</button>
            </form>
        </div>
    )
}


const mapStateToProps =(state) =>{
    
    return{
        loginName: state.userNameReducer.userName,
        penalty: state.dollarJarReducer.penalty,
        newName:state.dollarJarReducer.newname,
        total:state.dollarJarReducer.total
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