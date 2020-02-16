import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import DollarJarPage from './components/DollarJarPage';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducer from './reducers/allReducer';

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const routing = (
    <Router>
      <div>
      
            <Route exact path="/" component={HomePage}/>
               
            <Route path="/dollarjarpage" component={DollarJarPage} />     
        
      </div>
    </Router>
  )


ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
