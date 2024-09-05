// this file will work as a server
const express=require("express");
const app=express();
let port=3000;
app.listen(port,()=>{
    console.log("app is listing on port "+port);
});
// app.use((req,res)=>{  // listen all the request
            // console.log("request recieved");
            // // console.log(req);  -> printing request object
            // //  res.send("this is my response");// sending normal response
            // res.send({   // sending object response
            //     name:"sarfaraj",
            //     height:6.2
            // })
            // // when we send response inside .use ,for all path same reponse will be send
            // // to overcome it we use app.get
            // });
    app.get("/",(req,res)=>{
        res.send("you contacted main path");
    })
    // app.get("/help",(req,res)=>{
    //     res.send("you contacted help path");
    // }
    // app.get("/contact",(req,res)=>{
    //     res.send("you contacted contact path");
    // })
    // app.get("*",(req,res)=>{  // this will work when none of the above path is matched with requester
    //      res.send("entered correct path");
    // })

// using path parameter
        // app.get("/:username",(req,res)=>{
        //     console.log(req.params);
        //     let {username}=req.params;
        //     res.send(`your entered username:${username}`);
        // })
        app.get("/:username/:id",(req,res)=>{
            console.log(req.params);
            let {username,id}=req.params;
            res.send(`your entered username:${username}and id:${id}`);
        })
// quarey string
        app.get("/search",(req,res)=>{
            console.log(req.query);
            res.send("example of query string");
            //http://localhost:3000/search?q=hellobrother
            //in the above comment the text 'hellobrother' is the query string
        })