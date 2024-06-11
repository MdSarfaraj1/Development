// for each 
//array.foreach(function name or body);
//function will be applied over all tthe elements of the array
let arr=[5,7,6,8,2];

arr.forEach((element) => {
    console.log(element*element);
});
console.log("\n");


// map function
//apply the function over each element of num and store the return value in 
//new arry name double // can be store in same array
// if nothing is return then double will be created of same length
//of num but all values will be undefined
let num=[1,5,8,6,32];
let double=num.map((el)=>{
    return el*2;
});
double.forEach((element) => {
    console.log(element);
});
console.log("\n");


//filter
// filter the elements of the array based on the filteration you 
// mention
let k=[2,4,85,6,9,7,8]
let y=k.filter((el)=>
{
    return el%2==0;  // if true then el will be added to y
});
y.forEach((element) => {
    console.log(element);
});
console.log("\n");

// Every 
// returns true if every element of the array gives true value for 
// a function else false
console.log([1,2,3,4,5,6,7].every((el)=>{el%2==0})+"\n");
console.log("\n");

// reduce 
//reduce the array to a single value
let a=[1,5,7];
console.log(k=a.reduce((accumulator,el)=>{
accumulator*10+el;
}));









