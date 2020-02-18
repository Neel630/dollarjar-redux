import React from 'react';
import { connect } from 'react-redux';
import { modifyPenalty, addNewPerson, setNewName } from '../actions/index';

class Header extends React.Component{


    something(event) {
        event.preventDefault();
        this.props.addPerson();
    }

    render(){

        return(
            <div>
                <form>
                    <p>Hii {this.props.loginName}</p>
                    <p>Penalty : {this.props.penalty}</p>
                    <input type="number" value={this.props.penalty} onChange = {(event)=>this.props.changePenalty(event)}></input>
                    <br></br>
                    <p>Total : {this.props.total}</p>
                    <input placeholder="Enter Name" value={this.props.newName} onChange={(event)=>this.props.newNameToAdd(event)}></input>
                    <button onClick={(event)=>this.something(event)}>Add Person</button>
                </form>
            </div>
        )
    }
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
        changePenalty:(event) => dispatch(modifyPenalty(event.target.value)),

        newNameToAdd:(event) => dispatch(setNewName(event.target.value)),

        addPerson:()=>dispatch(addNewPerson())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);