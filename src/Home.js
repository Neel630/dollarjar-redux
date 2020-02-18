import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { detectUserName } from './actions/index';


function Home (props) {

    let checkUserName = props.username.trim();
    let displayButton = (<Link to="/dollarjar"> <button className="btn btn-primary">Submit</button></Link>);

    return (
      <div className="container">
        <form>
            <input onChange={(event)=>props.userNameDetected(event)} placeholder="Enter Username"></input>
            {checkUserName.length>0 ? displayButton: ""}
        </form>
      </div>
  );
  
}

const mapStateToProps = (state)=>{
  return{
      username:state.userNameReducer.userName
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    userNameDetected:(event)=> dispatch(detectUserName(event))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
