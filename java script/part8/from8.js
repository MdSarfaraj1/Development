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
console.log([1,2,3,4,5,6,7].every((el)=>el%2==0)+"\n");// odd even
//check if all are multple or not of 10
console.log([50,60,70,2].every((el)=>{return el%10==0}));
console.log("\n");

// reduce 
//reduce the array to a single value
///// if use {}in arrow function then must write return 
//// if use() then dont need but function can contain only single line
let a=[1,5,7];
let b=a.reduce((accumulator,el)=>{return accumulator*10+el+1/*same (acumulator*10+el+1)*/});
console.log(b);
console.log("\n");


// maximum using reduce
let arfr=[5,7,6,2,858,55];
let max=arfr.reduce((max,el)=>{
    if(el>max)
        max=el;
    return max;
});
console.log(max);
console.log("\n");

// SPREDA
let arr4=[4,5,6,8,2,6,4,7,9,52,5];
console.log(arr4);//print the hole array
console.log(...arr4);// print the element of the array individually
// as ...arr4 pass all element of the array individually as argument
console.log(Math.min(...arr4));
let char=[..."hello world"];
console.log(char);


// SPREAD WITH LITERAL
let z=arr4;// z is not a new array , it start pointion to the existing array arr4
// so chnages in z will effect to arr4 also
console.log(z);
let l=[...arr4];// creating an array l with passing each element of arr4
// changes in l will not effct to arr4
console.log(l);
// multiple array can be assign to a new array
// say let a=[...b,...c]  so elemnts of b and c will be stored to a

// REST -> do quite similar job to variable argument in java
function min(...args)
{
    return args.reduce((min,el)=>{
        if(min>el)
            min=el;
        return min;
    })
}

//DISTRACTION
let ar=["md","sarfaraj","hridoy","biplab","mondal","kfgh","hgch"];
let first=ar[0];
let second=ar[1];
let third=ar[2];
// the above can be done as
let [firs,secon,thir]=ar;
let [f,s,...rest]=ar;// f=md, s=sarfaraj and rest will be store to rest array

//for object
const stud = {
    user:"md",
    clas:"v",
    roll:125,
    remarks:"a+",
    subject:"histry"
};
const {  user , clas } = stud;// compilere will find keyword user and clas in object 
// stud , and the values will be stored to the variable user and clas
const {  user:kl , clas:lk , subject:choise ="math"} = stud;
//value of user will store to another variable named kl
// ||   ||  clas  ||      ||  ||  ||      ||      ||      lk
// if subject keyword doesnot exist , choise 's  default value will be math
// if exist that value will stored to choise variable


