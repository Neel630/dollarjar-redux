import dollarJarReducer from './dollarJarReducer';
import userNameReducer from './userNameReducer';
import {combineReducers} from 'redux';

const allReducer = combineReducers(
    {
        dollarJarReducer,
        userNameReducer
    }
);

export default allReducer;