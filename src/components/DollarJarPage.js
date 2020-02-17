import React from 'react';
import { connect, useSelector } from 'react-redux';
import Header from './Header';
import Person from './Person';

class DollarJarPage extends React.Component{

    constructor(props){
        super(props);
        if(performance.navigation.type===1){
            this.props.history.push('/');
        }
    }

    componentDidUpdate(){
        console.log("updated list");
    }

    render(){
        
        return(
            <div className="container">
            
                <Header/>
               { 
                   this.props.personList.map((user)=> <Person
                           name={user.username}
                           value={user.value}
                           addHandler={()=>this.props.addPenalty(user.id)}
                           subHandler={()=>this.props.subPenalty(user.id)}
                       />
                   )
                }
               
            </div>
        );
    }
}

const mapStateToProps =(state)=>{
    
    return{
        personList:state.person
    }
}

const mapDispatchToProps =(dispatch)=>{
    
    return {
        
        addPenalty:(id)=>dispatch({
            type:'ADD_PENALTY',
            payload:id
        }),

        subPenalty:(id)=>dispatch({
            type:'SUB_PENALTY',
            payload:id
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DollarJarPage);