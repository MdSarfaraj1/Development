const express=require("express");
const MyError=require("./MyError");
const app=express();

app.use((req,res,next)=>{  // this middleware will be executed first 
    req.time=new Date(Date.now()).toString(); 
    console.log(req.method,req.time);
    next();
});
// middleware 
const checkToken=(req,res,next)=>{
    let token=req.query;
    if(token==="giveacces")
        next(); // gotto next middleware which is here /** */
    throw new MyError(400,"This error is cretaed my me ") // this line create an error object of class MyError
    // after this object will create the wxwcution will goto line 28
}

app.get("/api",checkToken,(req,res) /***/=>{
    res.send("data");
})
//--------------------------------------------
app.get("/",(req,res)=>{  // if any error occured in this route ,expres will handle it and goto line 28
    a=b;
  res.send("hello"); 
});
//------------------------------------------------------------
app.use((err,req,res,next)=>{ // this is a error handling middle ware
    console.log("error");
 let {status=500,message}=err;
 // if the "/" route generate any error expres will handle it but express has not any status code
 // so we are providing a default status code if not present 
 res.status(status).send(message);
 //next(err); /// this line will triggered express's default erro handler
})


app.listen(8080,()=>{
    console.log("app is listing on port 8080");
})
// the error object created at line 9 will only works for the error regarding /api route
// if any error is generated at any other route express will halndle it by itself

//====================================================================================
// for asyncronous erro chack the index.js file inside Mongo_Express folder