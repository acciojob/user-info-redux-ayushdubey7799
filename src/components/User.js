import React from "react";
import { useDispatch,useSelector } from "react-redux";
import emailUpdate from "../actions/emailActionCreator";
import nameUpdate  from "../actions/userNameActionCreator";

const User = () => {
    const userName = useSelector(state => state.name);
    const userEmail = useSelector(state => state.email);

    const dispatch = useDispatch();

    return(
        <>
         <h1>User Information</h1>
         <label for = "name">Name:</label>
         <input type="text" onChange={(e) => dispatch(nameUpdate(e.target.value))}/>
         <br/>
         <br/>
         <label for = "name">Email:</label>
         <input type="text" onChange={(e) => dispatch(emailUpdate(e.target.value))} />
         <p>Current Values in Store:</p>
         <p>Name:{userName}</p>
         <p>Email:{userEmail}</p>
        </>
    )
}

export default User;