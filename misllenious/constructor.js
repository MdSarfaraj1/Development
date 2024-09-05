// js also implements oops concepts 
// here is the demonstration of creating constructor
function Person(name,age){
        this.name=name,
        this.age=age;
}
let p1=new Person("Rahul",29);
let p2=new Person("Rohit",20);
Person.prototype.talk=function (){
    console.log("adding a new thing tothe Person constructor so both p1,p2 will have thisfunction");
}