import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Person from './Person';
import {incrementCharge,decrementCharge} from '../actions/index';

class DollarJar extends React.Component{

    constructor(props){
        super(props);
        if(performance.navigation.type===1){
            this.props.history.push('/');
        }
    }

    render(){
        return(
            <div className="container">
                <Header/>
               { 
                   this.props.personList.map((user)=> 
                   <Person
                        name={user.username}
                        value={user.value}
                        addPenaltyHandler={()=>this.props.addPenalty(user.id)}
                        subPenaltyHandler={()=>this.props.subPenalty(user.id)}
                    />
                   )
                }    
            </div>
        );
    }
}

const mapStateToProps =(state)=>{
    
    return{
        personList:state.personReducer.person
    }
}

const mapDispatchToProps =(dispatch)=>{
    
    return {
        
        addPenalty:(id)=>dispatch(incrementCharge(id)),

        subPenalty:(id)=>dispatch(decrementCharge(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DollarJar);