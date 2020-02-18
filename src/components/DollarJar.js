import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Person from './Person';
import {incrementPenalty,decrementPenalty} from '../actions/index';

class DollarJar extends React.Component{

    constructor(props){
        super(props);
    }

    UNSAFE_componentWillMount(){
        if(this.props.userName==="")
        {
            this.props.history.push('/');
        }
    }

    render(){
        return(
            <div className="container">
                <Header/>
               { 
                   this.props.personList.map((person)=> 
                   <Person
                        name={person.username}
                        value={person.value}
                        addPenaltyHandler={()=>this.props.addPenalty(person.id)}
                        subPenaltyHandler={()=>this.props.subPenalty(person.id)}
                    />
                   )
                }    
            </div>
        );
    }
}

const mapStateToProps =(state)=>{
    
    return{
        userName:state.userNameReducer.userName,
        personList:state.dollarJarReducer.person
    }
}

const mapDispatchToProps =(dispatch)=>{
    
    return {
        
        addPenalty:(id)=>dispatch(incrementPenalty(id)),

        subPenalty:(id)=>dispatch(decrementPenalty(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DollarJar);