const express=require("express");
const app=express();
let port=8080;

app.use(express.urlencoded({extended:true}));  // this line must be written to let the express convert the url into readable format


app.get("/register",(req,res)=>{
    // in get we can acces the incoming data by queary string
    let{user,password}=req.query;
    res.send("get response"+user+"    "+password);
});
app.post("/register",(req,res)=>{
    res.send("post response");
    console.log(req.body);// the body is the informations coming with the  request
    console.log("ok");
});



app.listen(port,()=>{
    console.log("listing on port "+port);
});