// one to squillions

const mongoose=require("mongoose");
// making connections with mongodb
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relation');  
    // we are connecting to the test database in localhost
  }

main()
.then((res)=>{
    console.log("connection succesfull");
})
.catch(err => console.log("error happend".err));

//user scema-----------------------------------
const userSchema=mongoose.Schema({
    name:String,
    email:String
});
const User=mongoose.model("User",userSchema);
// post schema----------------------------------------
const postSchema=mongoose.Schema({
    content:String,
    like:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
});
const Post=mongoose.model("Post",postSchema);
//--------------------------------------------------------
const addData=async()=>{
    let user1=new User({
        name:"MD Sarfaraj",
        email:"mdjhghd@!455"
    });
  let post1=new Post({
    content:"HEllo basundhara",
    like:45
  });
  post1.user=user1;
  await user1.save();
  await post1.save();
};
addData();

