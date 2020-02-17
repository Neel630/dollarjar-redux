let initialState = {
    userName:"",
}

const allReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'DETECT_USERNAME':
            return {
                ...state,
                userName:action.payload
            };

        default:
            return state
            
    }
}

export default allReducer;