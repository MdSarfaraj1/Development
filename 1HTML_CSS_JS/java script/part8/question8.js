//Q:1
// square and sum the array elments and find the  average of the array using arrow function
let arr=[4,5,1,2];
let k=arr.reduce((sum,el)=>sum+el*el,0);
// if not initialize accumulator value ,will take arr's 1st elemnt as its value 
// and logic will be applied from elment two i.e. 5


//Q:2
// create a new array with map function whose element are +5 than element of arr
let newa=arr.map((el)=>el+5);

//Q:3
// create a new array  whose element are in uppercase of words present in arr4
arr4=["fdhg","gfd","dtg"];
let ne=arr4.map((el)=>el.toUpperCase());

//Q:4
// cretae a function takes an array and vARIABLE NUMBER Of argument
//return a new array with previous array valuse and also doubeled of variable arguments
let sd=[4,5,8,5];
function f(sd,...varf){
    let kl=varf.map((el)=>el*el);
    let newg=[...sd,...kl];
    console.log(newg);
}
f(sd,1,2,3,4);


//Q:5
//take two object , merge them and return new one
let o1=
{
    s:"dsf",
    v:"fd",
    fg:5

};
let o2=
{
    s:"dfs",
    d:"defau",
    f:"54"
};
function fu(o1,o2){
    return {...o1,...o2};
    
}
const fin=fu(o1,o2);
console.log(fin);
