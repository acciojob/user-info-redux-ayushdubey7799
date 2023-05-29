import { EMAIL_UPDATE } from "./actionTypes";

const emailUpdate = (email) => {
    return(
        {
            type: EMAIL_UPDATE,
            payload: email
        }
    )
}

export default emailUpdate;