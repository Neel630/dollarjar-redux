import * as actionTypes from '../actions/actionTypes';

let initialState = {
    userName:"",
}

const userNameReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_LOGIN_NAME:
            return {
                ...state,
                userName:action.payload
            };

        default:
            return state
            
    }
}

export default userNameReducer;