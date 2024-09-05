const express=require("express");
const app=express();
const path=require("path");
app.set("views",path.join(__dirname,"/views")); // telling the express that search the views folder throgh (the path of where the index.js file is present + /views)
// above two lines is written to make the views folder accessable from anywhere means whereever the server get stRTED it will be able to acces the views folder
const port=8080;
app.set("view engine","ejs");// tell the express that to render the views/ templete i use the ejs view engine
app.get("/:username",(req,res)=>{  //:username  is a placeholder for a dynamic value in the url 
            // let followers=["i","am","good","boty"];
            // let random=Math.floor(Math.random()*6 +1); // getting random value
            // res.render("home",{data:random,followers});// no need to give extension  .ejs can only write home
   let {username}=req.params;
   console.log(username);
    const instagramdata=require("./data.json"); 
    const data=instagramdata[username];
    console.log(data);
    res.render("instagram",{data});
})
app.listen(port,()=>{  // this start the server
    console.log("listing on port"+port);
});  