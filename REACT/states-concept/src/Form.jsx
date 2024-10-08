import { useState } from "react"
export default function Form(){
  let [formData,setFormData]=useState({
    username:"mahan",
    name:"SArfaraj",
    age:5
  });
    function handleChange(event){
        let fieldName=event.target.name
        setFormData((prevData)=>{
           
           return{ ...prevData, [fieldName]:event.target.value}
        })
    }
    return(
        <form>
            <label htmlFor="userName">Enter USername &nbsp;</label>
            <input id="userName" placeholder="enter username" name="username" value={formData.username} onChange={handleChange}></input><br></br><br></br>
            <label htmlFor="Name">Enter name</label>
            <input id="Name" placeholder="enter Name" value={formData.name} name="name" onChange={handleChange}></input><br></br><br></br>
            <label htmlFor="age">Enter Age</label>
            <input type="number" id="age" placeholder="enter Age" name="age" value={formData.age} onChange={handleChange}></input><br></br><br></br>
        </form>    
    )
}