const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=8080;
const methodOverride=require("method-override");
const path=require("path");
const Chat=require("./models/schema1.js");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
//------------------------------------------------------------------
// making connections with mongodb
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');  
    // we are connecting to the test database in localhost
  }

main()
.then((res)=>{
    console.log("connection succesfull");
})
.catch(err => console.log("error hapende".err));

// Index route-> show all chats-------------------------------------------------------
app.get("/chats",async(req,res)=>{
let chats=await Chat.find({});
//console.log(chats);
res.render("All_chats.ejs",{chats});
});
//create new chat----------------------------------------------------
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/chats/new",async(req,res)=>{
    let newChat= new Chat(req.body);
await newChat.save()
.then((res)=>{
    console.log(res);
})
.catch(()=>{
    console.log("sopmething is wrong");
})
res.send("Your message is been send");
});
//-----------------------------------------------------------------------------
// UPDATE speific chat partially
app.get("/chats/:id/update",async(req,res)=>{
    let id=req.params.id;
    let updateChat=await Chat.findById(id);
    res.render("update.ejs",{data:updateChat});
});
app.patch("/chats/:id/update",(req,res)=>{
    console.log(req.body);
    Chat.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then((res)=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
    res.redirect("/chats");
})


// delete a specific chat---------------------------------------------------
app.get("/chats/:id/delete",(req,res)=>{
    res.render("edit0.ejs",{id:req.params.id});
});

app.delete("/chats/:id/delete",async(req,res)=>{
    let id=req.params.id;
    console.log(id);
        await Chat.findByIdAndDelete(id)
         .then(res=>{
            console.log(res+"succesfuyl");
        })
        .catch(err=>{
            console.log(err);
        })
        res.redirect("/chats");
});


app.listen(port,()=>{
    console.log(`listing on port ${port}`);
})