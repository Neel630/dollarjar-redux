import { act } from "react-dom/test-utils";

let initialState = ({
    uname:null,
    tempname:"",
    person:[{username:"Neel",value:10,id:0}],
    count:1,
    penalty:10
})


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
            return temp2;

        case 'NEW_NAME':
            console.log(action.payload);
            let temp3 ={...state};
            temp3.tempname = action.payload;
            return temp3;

        case 'ADD_PERSON':
            let temp4 = {...state};
            let tempstring = temp4.tempname.trim();
            if(tempstring!=""){
                let newperson = {
                    username:tempstring,
                    value:0,
                    id:temp4.count
                }
                let temparr = temp4.person;
                temparr.push(newperson);
                temp4.person= temparr;
                temp4.count += 1;
                temp4.tempname="";
            }
            return temp4;
    }
}

export default allReducer;