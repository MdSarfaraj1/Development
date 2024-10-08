// one to few 

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
.catch(err => console.log("error hapende".err));
// constructing schema
const schema=new mongoose.Schema({
    userName:String,
    address:[
        
        {_id:false,location:String,city:String}
    ],
});
// creating model
const User=mongoose.model("User",schema);
const addUser=async()=>{
    let newUser=new User({
        userName:"Md sarfaraj",
        address:[
            {
                location:"Kolkata",
                city:"howrah"
            }
        ]
    });
newUser.address.push({location:"Howrah",city:"bagnan"}); // adding second address
await newUser.save();
}
addUser();