import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class HomePage extends React.Component {

    
    render(){

     console.log(this.props.tempUserName);
    return (
    <div className="container">
    <form>
          
          <input /*something action*/ onChange={(event)=>this.props.enterUserName(event)} placeholder="Enter Username"></input>
          <Link to="/dollarjarpage"> <button className="btn btn-primary">Submit</button></Link>
      </form>
      </div>
  );
  }
}

const mapStateToProps = (state)=>{
  return{
      tempUserName:state.uname
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    enterUserName:(event)=> dispatch( {
      type:'DETECT_USERNAME',
      payload:event.target.value
  })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
