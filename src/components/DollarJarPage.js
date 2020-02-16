import React from 'react';
import { connect, useSelector } from 'react-redux';
import Header from './Header';
import PersonList from './PersonList';

class DollarJarPage extends React.Component{
    render(){

        return(
            <div>
                <Header/>
               
               
            </div>
        );
    }
}

const mapStateToProps =(state)=>{
    return{
        personList:state.person
    }
}

// const mapDispatchToProps =(dispatch)=>{
//     return {
//         addMoneyHandler:(event,id){
//             type:''
//         }
//     }
// }

export default connect(mapStateToProps)(DollarJarPage);