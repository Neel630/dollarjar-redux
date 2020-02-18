import * as actionTypes from './actionTypes';

export function modifyPenalty(amount) {
    return {
        type: actionTypes.MODIFY_PENALTY,
        payload: amount
    }
}

export function setNewName(newName) {
    return {
        type: actionTypes.SET_NEW_NAME,
        payload: newName
    }
}

export function addNewPerson () {
    return {
        type: actionTypes.ADD_NEW_PERSON,
    }
}

export function incrementPenalty (id) {
    return {
        type:actionTypes.INCREMENT_PENALTY,
        payload:id
    }
}

export function decrementPenalty(id) {
    return {
        type:actionTypes.DECREMENT_PENALTY,
        payload:id
    }
}

export function setLoginName(event){
    return {
        type:actionTypes.SET_LOGIN_NAME,
        payload:event.target.value
    }
}

