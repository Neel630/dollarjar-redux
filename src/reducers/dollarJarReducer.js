let initialState = {
    newName: "",
    person: [],
    count: 0,
    penalty: 10,
    total: 0
}

const dollarJarReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'DETECT_NEW_NAME':
            return {
                ...state,
                newName: action.payload
            };

        case 'ADD_PERSON':
            action.payload.preventDefault();
            let stateToModify = {
                ...state
            };
            let nameToAdd = stateToModify.newName.trim();
            let arrayToModify = [...stateToModify.person];
            if (nameToAdd != "") {
                let newPerson = {
                    username: nameToAdd,
                    value: 0,
                    id: stateToModify.count
                }

                arrayToModify.push(newPerson);
                stateToModify.person = arrayToModify;
                stateToModify.count += 1;
                stateToModify.newName = "";
            }
            return {
                ...stateToModify,
                person: arrayToModify
            };

        case 'PENALTY_CHANGE':
            return {
                ...state,
                penalty: parseInt(action.payload)
            };

        case 'ADD_PENALTY':
            let referenceState = {
                ...state
            }
            let objToModify = referenceState.person;

            let i = 0;
            for (i = 0; i < objToModify.length; i++) {
                if (objToModify[i].id == action.payload) {
                    i = parseInt(objToModify[i].id);
                    break;
                }
            }

            let newTotalAfterAddition = state.total;
            if (!isNaN(state.penalty)) {
                newTotalAfterAddition += parseInt(state.penalty);
                objToModify[i].value += parseInt(state.penalty);
            }

            let updatedArray = [...objToModify];
            return {
                ...state,
                person: updatedArray,
                    total: newTotalAfterAddition
            }

        case 'SUB_PENALTY':
            let referenceState2 = {
                ...state
            }
            let objToModify2 = referenceState2.person;

            let j = 0;
            for (j = 0; j < objToModify2.length; j++) {
                if (objToModify2[j].id == action.payload) {
                    j = parseInt(objToModify2[j].id);
                    break;
                }
            }

            let newTotalAfterSubtraction = state.total;
            if (!isNaN(state.penalty)) {
                newTotalAfterSubtraction -= parseInt(state.penalty);
                objToModify2[j].value -= parseInt(state.penalty);
            }

            let updatedArray2 = [...objToModify2];
            return {
                ...state,
                person: updatedArray2,
                    total: newTotalAfterSubtraction
            }

            default:
                return state

    }
}

export default dollarJarReducer;