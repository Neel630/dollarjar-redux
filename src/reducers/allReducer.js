import personReducer from './personReducer';
import userNameReducer from './userNameReducer';
import {combineReducers} from 'redux';

const allReducer = combineReducers(
    {
        personReducer,
        userNameReducer
    }
);

export default allReducer;