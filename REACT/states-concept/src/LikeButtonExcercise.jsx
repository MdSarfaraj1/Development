import { useState } from "react"
export default function LikeButton(){
    let [isLiked,setISLiked]=useState(false);
    let style={color:'red'};
    let liked=()=>{
        setISLiked(!isLiked);
    }
    return(
        <div>
            <p onClick={liked}>
                {   isLiked?<i className="fa-solid fa-heart" style={style}></i>:<i className="fa-regular fa-heart"></i>  }
                </p>
        </div>
    )
}