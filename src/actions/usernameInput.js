const usernameInput =(event)=>{
    return{
        type:'DETECT_USERNAME',
        payload:event.target.value
    }
}

export default usernameInput;