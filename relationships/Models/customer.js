// one to many

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
// constructing  order schema----------------------------------------
const orderSchema=new mongoose.Schema({
    item:String,
    price:Number,
});
// constructing customer schema------------------------------------------
const customerSchema=new mongoose.Schema({
        Name:String,
        orders:[
            {
                type: mongoose.Schema.Types.ObjectId, // type wil be of ObjectId
                ref:"Order"// the ObjectId belongs to the Order model/collection
            },
        ],
});
customerSchema.post("findOneAndDelete",async(data)=>{// data is the return value given by the mongodb , in this case the deleted document
    //if we perform findOneAndDelete then after operation this middleware performs deletion of each orders related to data(customer) from the Order collection
   console.log("outer");
    if(data.orders.length)
    {
        console.log("inner")
        let result=await Order.deleteMany({_id:{$in:data.orders}}) // deleting all the documents whose _id field matches any value present in orders array 
        console.log("under under");
        console.log(result);
    }
});
// middlewqare must be created before model creation as model wil not conatins the middlware with it if middleware is create after the model creaytion
const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema);

const addCustomer=async()=>{
    let newCust=new Customer({
        Name:"Anirban Banarjee"
    });
    let newOrder=new Order({
        item:"Chips",
        price:"50"
    });
    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();
    console.log("added new customer");
}
addCustomer();

const delCustomer=async()=>{
    let data=await Customer.findByIdAndDelete('66e839ac460cb3bd182ee9c4') 
    // though using findByIdAndDelete but by default it triggers findOneAndDelete so  this operation(findOneAndDelete) triggers the middleware of line 68
    console.log("This is haha",data);
}
//delCustomer();
