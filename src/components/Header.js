import React from 'react';
import { connect, useSelector } from 'react-redux';

class Header extends React.Component{

    render(){
        return(
            <div>
                <p>Hii {this.props.loginname}</p>
                <p>Penalty : {this.props.fine} {this.props.tempname}</p>
                <input type="number" onChange = {(event)=>this.props.penaltyChange(event)}></input>
                <input placeholder="Enter Name" onChange={(event)=>this.props.newname(event)}></input>
                <button onClick={this.props.addperson}>Add Person</button>
            </div>
        )
    }

}


const mapStateToProps =(state) =>{
    console.log(state.uname);
    return{
        loginname: state.uname,
        fine: state.penalty,
        tempname:state.tempname
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        penaltyChange:(event) => dispatch({
            type:'PENALTY_CHANGE',
            payload:event.target.value
        }),

        newname:(event) => dispatch({
            type:'NEW_NAME',
            payload:event.target.value
        }),

        addperson:()=>dispatch({
            type:'ADD_PERSON'
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);