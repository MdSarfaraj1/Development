import { useState } from "react";
export default function Comments({addNewComment}){
    let [commentData,setCommentData]=useState({
        username:"",
        remark:"",
        rating:5
      });
    function handleChange(event){
        let fieldName=event.target.name
        setCommentData((prevData)=>{
            
           return{ ...prevData, [fieldName]:event.target.value}
          
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(commentData);
        addNewComment(commentData);
        
        setCommentData({
        username:"",
        remark:"",
        rating:5
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Enter USername &nbsp;</label>
            <input id="username" placeholder="enter username" name="username" value={commentData.username} onChange={handleChange}></input><br></br><br></br>
            <label htmlFor="remark">Enter remark</label>
            <input id="remark" placeholder="enter remark" value={commentData.remark} name="remark" onChange={handleChange}></input><br></br><br></br>
            <label htmlFor="rating">Give rating</label>
            <input type="number" id="rating" placeholder="Give a rating" min={1} max={5} name="rating" value={commentData.rating} onChange={handleChange}></input><br></br><br></br>
        <button>Add Comment</button>
        </form>    
    )
}