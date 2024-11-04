import React,{useContext} from "react";
import USerContext from "../context/userContext";
function Profile(){
    const {user}=useContext(USerContext)
        if(!user) return <div>Please Login</div>
        return(
            <div>
                <h3>Welcome&nbsp;{user}</h3>
            </div>
        )
}

export default Profile
