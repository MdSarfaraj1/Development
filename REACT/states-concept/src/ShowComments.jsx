import { useState } from "react";
import Comments from "./Comments";
export default function ShowComments(){
 let [commentData,setCommentData]=useState([{
    username:"sarfaraj",
    remark:"good",
    rating:3
 }]);
function handleAddition(newComment){
    setCommentData((prevData)=>[...prevData,newComment])
    console.log("added new")
}
 return(
    <div>
        
            {commentData.map((comment)=>(
                <ul>
                    <li>{comment.username}</li>
                    <li>{comment.remark}</li>
                    <li>{comment.rating}</li>
                </ul>
            ))}
           <Comments addNewComment={handleAddition}/>
    </div>
 )
}
// we can use array.map((data)=>{...}) if there is multiple things to do inside it , in this case we have to wrie
// return explicitly
// can use arry.map((data)=>(..)) if there is only one expression to be return, no need to write return explicitly