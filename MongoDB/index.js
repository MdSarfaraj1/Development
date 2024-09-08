const mongoose=require("mongoose");
//------------------------------------------------------------------
// making connections with mongodb
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');  // we are connecting to the test database in localhost
  }

main()
.then((res)=>{
    console.log("connection succesfull");
})
.catch(err => console.log("error hapende".err));
//-----------------------------------------------------------
//defining schema i.e. all documents have to follow this structure which will be inserted in collection that is modeled with this schema
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});
// creating models means collection
const User=mongoose.model("User",userSchema);// monog will change User to users
const Employ=mongoose.model("User",userSchema);  // here both variables User and Employ will interact with users collection
const Student=mongoose.model("Student",userSchema);// creating Student model
//-----------------------------------------------------------------------------------
// creating document wchis is the object of the model
const user1=new User({name:"Md sarfaraj",email:"gsfs@gamil.com",age:"23"});
const user2=new User({name:"Hridoy",email:"abcd@gamil.com",age:"25"});
        // user1.save(); // saving the user1 document in users collection of test database // this function returns promise
        // user2.save()  // utilixzing the promise
        // .then(res=>{
        //     console.log("succesfull");
        // })
        // .catch(err=>{
        // console.log("not possible");
        // });
User.findOneAndUpdate({name:"shayam"},{$set:{age:30}},{new:true})// new :true means return the document after updation 
                                                                                // by default is is false
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log("unsuccesful");
});


