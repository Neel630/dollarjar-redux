import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class HomePage extends React.Component {

    
    render(){

      let checkUserName = this.props.tempUserName.trim();
      let displayButton = (<Link to="/dollarjarpage"> <button className="btn btn-primary">Submit</button></Link>);

     console.log(this.props.tempUserName);
    return (
    <div className="container">
    <form>
          
          <input /*some action*/ onChange={(event)=>this.props.enterUserName(event)} placeholder="Enter Username"></input>
          {checkUserName.length>0 ? displayButton: " "}
            
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
