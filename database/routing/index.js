// the work is to create several routes                 // 1. GET   /   -> show number of users in database
//2. GET   /USER -> SHOW USERS(EMAIL,ID,USERNAME)           //3. PATCH  /USER/:ID ->USERNAME modification
// 4. POST   /USER -> ADD NEW USER                          //5. DELETE /USER/:ID ->DELETE USER FROM DATABASE
//-------------------------------------------------------------------------
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express");
const path=require("path");
const methodOverride=require("method-override");
let app=express();
app.use(methodOverride("_method")); // comparing the _method's value and converting the request to that value
app.use(express.urlencoded({extended:true}));//encode into object 
                                            // extended:true use qs library and support nested object but extended:false dont support 
                                            //nested object and use querystring library
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
//----------------------------------------------------------------------------
// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'abcd',
    password:'1234',
  });
//---------------------------------------------------------------------------
// 1st route
app.get("/", (req, res) => {
    let q = "select count(*) from user";
    connection.query(q, (err, result) => {
        if (err) {
            console.error(err);
            return res.send("Some error occurred.");  // return is also used to stop the further execution
        }
        let count = result[0]["count(*)"];
        res.render("home.ejs", { count });
    });
});

//----------------------------------------------------------------------------
// 2nd route
app.get("/users",(req,res)=>{
    let data=[];
    let q="select id,username,email from user";
    connection.query(q,(err,result)=>{
        if(err)
        {
            console.error(err);
            return res.send("some eror");
        }
       // console.log(result);
        data=result;
         res.render("user.ejs",{data});
    });
});
//-------------------------------------------------------------------------------------
//3rd route  part1
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`select * from user where id='${id}'`; // ''   is used to make the id a string as sql takes string only
    connection.query(q,(err,result)=>{
        if(err)
        {
            console.error(err);
            return res.send("some eror");
        }
        let data=result;
            res.render("edit.ejs",{data});
    });

});
//part 2

app.patch("/user/:id",(req,res)=>{ 
    //take id,passord and new name from params
    // check the password is currect or not
    //if curresct edit the user
    let {id}=req.params;
    let{username,password}=req.body;
    let q=`select * from user where id='${id}'`;
    connection.query(q,(err,result)=>{ // select the user
        if(err)
            {
                console.error(err);
                return res.send("some eror");
            }
            console.log(result);
            if(result[0]['password']==password)  // check if the password is currect
                {
                    let updateQuery = 'UPDATE user SET username = ? WHERE id = ?';
                    connection.query(updateQuery, [username, id], (err) => { // update the name
                        if(err)
                            {
                                console.error(err);
                                return res.send("some eror");
                            }
                    });
                    res.redirect("/users");
                }
                else // password is incorrect
                {
                    res.send("wrong password");
                }
        
           });
     

});
//-------------------------------------------------------------------------------------------
// route 4 -> POST   /USER -> ADD NEW USER   
app.get("/add",(req,res)=>{
    console.log("done");
    res.render("add.ejs");
});
app.post("/add",(req,res)=>{
   let {username,email,password}=req.body;
   let id= faker.string.uuid();
   console.log(id);
   let data=[id,username,email,password];
   let q="INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
   connection.query(q,data,(err,result)=>{
    if(err)
    {
        console.error(err);
        return res.send("some eror");
    }
    //   res.send("added succesfully");
        res.redirect("/users");
});

});
//-------------------------------------------------------------------------------------
//delete user


app.listen("8080",()=>{
    console.log("app is listing on 8080");
});


