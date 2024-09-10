const mongoose=require("mongoose");
const chatSchema=new mongoose.Schema({
    from:{
        type:String,
        required:true,},
    to:{
        type:String,
        required:true },
    msg:{
        type:String,
        maxLength:50},
    created_at:{
        type:Date,
        default:new Date()}// Date() is a internal function of js thast gives the date
},{ strict: false }); // false means dont follow the schema strictly
const chat=mongoose.model("chat",chatSchema);
module.exports=chat; // exporting the model