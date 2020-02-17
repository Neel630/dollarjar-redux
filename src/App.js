import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import DollarJarPage from './components/DollarJarPage';

function App() {
    return(
    <div>
    <Router>
      <div>
      
            <Route exact path="/" component={HomePage}/>
               
            <Route path="/dollarjarpage" component={DollarJarPage} />     
        
      </div>
    </Router>
    </div>
  )
}

export default App;
