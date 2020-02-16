import { act } from "react-dom/test-utils";

let initialState = {
    uname:null,
    tempname:"",
    person:[
        {username:"Neel",value:0,id:0},
        {username:"Meet",value:0,id:1}
        ],
    count:2,
    penalty:10,
    total:0
}


const allReducer =(state=initialState, action)=>{
    switch(action.type){
        case 'DETECT_USERNAME':
            console.log(action.payload);
            let temp ={...state};
            temp.uname = action.payload;
            return temp;

        case 'PENALTY_CHANGE':
            console.log(action.payload);
            let temp2 = {...state};
            temp2.penalty = parseInt(action.payload);
            
            return {
                ...temp2,
                penalty:parseInt(action.payload)
            };

        case 'NEW_NAME':
            console.log(action.payload);
            let temp3 ={...state};
            temp3.tempname = action.payload;
            return temp3;

        case 'ADD_PERSON':
            let temp4 = {...state};
            let tempstring = temp4.tempname.trim();
            // REMEMBER :::: NEVER TAKE REFERENCE OF STATE
            let temparr = [...temp4.person];
            if(tempstring!=""){
                let newperson = {
                    username:tempstring,
                    value:0,
                    id:temp4.count
                }
                
                temparr.push(newperson);
                temp4.person= temparr;
                temp4.count += 1;
                temp4.tempname="";
            }
            return {
                ...temp4,
                person:temparr
            };

        case 'ADD_PENALTY':
            let newObj = {...state}
            let updatedPersons = newObj.person;
            let i = 0;
            for (i = 0; i < updatedPersons.length; i++) {
                if (updatedPersons[i].id == action.payload) {
                    i = parseInt(updatedPersons[i].id);
                    break;
                }
            }
            let temptotal = state.total;
            if(!isNaN(state.penalty)){
            temptotal += parseInt(state.penalty);
            updatedPersons[i].value += parseInt(state.penalty);
            console.log(updatedPersons[i].value);
            }
            
            let updateArray = [...updatedPersons];

            return {
                ...state,
                person: updateArray,
                total:temptotal
            }

        case 'SUB_PENALTY':
            let newObj1 = {...state}
            let updatedPersons1 = newObj1.person;
            console.log(updatedPersons1)
            let j = 0;
            for (j = 0; j < updatedPersons1.length; j++) {
                if (updatedPersons1[j].id == action.payload) {
                    j = parseInt(updatedPersons1[j].id);
                    break;
                }
            }

            let temptotal1=state.total;
            if(!isNaN(state.penalty)){
            
            temptotal1 -= parseInt(state.penalty);
            updatedPersons1[j].value -= parseInt(state.penalty);
            console.log(updatedPersons1[j]);
            }

            let updateArray1 = [...updatedPersons1];
            
            return {
                ...state,
                person: updateArray1,
                total:temptotal1
            }
            
    }
}

export default allReducer;