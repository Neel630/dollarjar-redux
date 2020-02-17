export function modifyPenalty(event) {
    return {
        type: 'PENALTY_CHANGE',
        payload: event.target.value
    }
}

export function newNameAdder(event) {
    return {
        type: 'DETECT_NEW_NAME',
        payload: event.target.value
    }
}

export function addNewPerson (event) {
    return {
        type: 'ADD_PERSON',
        payload: event
    }
}

export function incrementCharge (id) {
    return {
        type:'ADD_PENALTY',
        payload:id
    }
}

export function decrementCharge (id) {
    return {
        type:'SUB_PENALTY',
        payload:id
    }
}

export function detectUserName(event){
    return {
        type:'DETECT_USERNAME',
        payload:event.target.value
    }
}

