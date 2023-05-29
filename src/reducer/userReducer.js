import { NAME_UPDATE } from "../actions/actionTypes";
import { EMAIL_UPDATE } from "../actions/actionTypes";

let initialState = {
    name : "",
    email: ""
}

const userReducer = (state=initialState,actions) => {
    switch(actions.type){
        case NAME_UPDATE:
            return {...state, name: actions.payload}
        case EMAIL_UPDATE:
            return {...state, email: actions.payload}
        default:
            return state    
    }
}

export default userReducer