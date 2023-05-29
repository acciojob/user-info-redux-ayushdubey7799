import { NAME_UPDATE } from "./actionTypes";

const nameUpdate = (name) => {
    return (
        {
            type: NAME_UPDATE,
            payload: name
        }
    )
}

export default nameUpdate;