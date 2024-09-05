// Creating RESTful APIs
        //          GET             /posts              to get data for all posts       route: INDEX
        //          POST            /posts              to add a new post               route: CREATE
        //          GET             /posts/:id          to get one  post (by id)        route: VIEW
        //          PATCH           /posts/:id          to update specific post         route: UPDATE
        //          DELETE          /posts/:id          to delete specific post         route: DESTROY

const express=require("express");
const app=express();
let port=8080;
const path=require("path");
const {v4: uuidv4}=require("uuid"); // requiring uuid for universally unique id generating
const methodOverride=require("method-override");


app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
let posts=[
        {
                username:"Md sarfaraj",
                content:"i love coding",
                id:uuidv4() // creaTING UNIQE ID

        },
        {
                username:"hridoy",
                content:"Hardwork is important",
                id:uuidv4()
        },
        {
                username:"kartick",
                content:"Dont be lazy",
                id:uuidv4()
        }
        

]

app.get("/posts",(req,res)=>{  //  taking get request
        res.render("index",{posts});  // sending all files as response
});
app.get("/posts/new",(req,res)=>{ // taking request for creating new post
        res.render("new.ejs");  // sending new post ui
});
app.post("/posts",(req,res)=>{  // taking post request for new posts
       let{username,content}=req.body;
       let newid=uuidv4();
       console.log(newid);
       posts.push({username,content,newid});  // adding the new post to the posts arrray
       res.redirect("/posts"); // redirecting to the route which name is posts after adding the new post to the array
});
app.get("/posts/:id",(req,res)=>{
        let{id}=req.params;
        let desirepost=posts.find( (p) => id === p.id);// finding post
        console.log(desirepost);
      req.render("showDesirePost.ejs",{desirepost});
});
app.get("/posts/update/:id",(req,res)=>{ // taking request for updating post
        let{id}=req.params;
        let desirepost=posts.find( (p) => id === p.id);
        res.render("update.ejs",{desirepost});  // sending new post ui
});
app.patch("/posts/:id",(req,res)=>{  // udating content
        let{id}=req.params;
        let newcontent=req.body.content;
        let post=posts.find( (p) => id === p.id);// finding post
        post.content=newcontent;// replace it with new value
        res.redirect("/posts");// redirect to the main page
});
app.delete("/posts/:id", (req, res) => {
        let { id } = req.params;
        let index = posts.findIndex(p => p.id === id); // Find the index of the post with the given id
        if (index !== -1) {
            posts.splice(index, 1); // Remove the post at the found index from the array
        }
        res.redirect("/posts");
    });

app.listen(port,()=>{
        console.log("listing on port 8080");
});

