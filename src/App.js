import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import DollarJar from './components/DollarJar';

function App() {
  return(
    <div>
      <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/dollarjar" component={DollarJar} />     
          </div>
      </Router>
    </div>
  )
}

export default App;
