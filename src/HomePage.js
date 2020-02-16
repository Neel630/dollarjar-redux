import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import usernameInput from './actions/usernameInput';
import {useSelector, useDispatch, connect} from 'react-redux';


class HomePage extends React.Component {

    // const dispatch = useDispatch();

    render(){
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

const mapDispatchToProps = (dispatch)=>{
  return{
    enterUserName:(event)=> dispatch( {
      type:'DETECT_USERNAME',
      payload:event.target.value
  })
  }
}

export default connect(null,mapDispatchToProps)(HomePage);
