// this file is to initialize the database with some values
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
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
//-----------------------------------------------------------
Chat.insertMany([{
    from:"MD sarfaraj",
    to:"kartick mondal",
    msg:"be the He",
    created_at:new Date()
},
{
    from:"kartick mondal",
    to:"MD sarfaraj",
    msg:"I am the HE",
    created_at:new Date()
},
{
    from:"MD sarfaraj",
    to:"sabir roy",
    msg:"always be consistence",
    created_at:new Date()
},
]);