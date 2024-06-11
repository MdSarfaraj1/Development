// console.log("hello world");
// console.log("hello world",3+4);
// let a=5;
// let b=3;
// console.log(a+b);
// let ball=5;
// let bat=54;
// ///let output="the total price is:"+(ball+bat)+"rupees";
// //same can be written as
// let output=`the total price is:${ball+bat} rupees`;
// console.log(output);
// alert("jpi maa");
// let input=prompt("Enter your name");
// let last=prompt("enter last name");
// alert(`${input} ${last}`);



// switch case
let s=2;
// switch(s)
// {
//     case 1: console.log("january");
//             break;
//     case 2: console.log("jary");
//             break;
//     case 3: console.log("february");
//             break;
//     default: console.log("Enter correct");
// }


// let str=prompt("Enter");
// if(str.charAt(0)=='A' && str.length>5)
//     {
//         console.log("golden");

//     }
//     else
//     {
//         console.log("not");
//     }


// const classinfo={   // objects of object
//         student1:
//         {
//             name: "MD sarfaraj",
//             grade:"a"
//         },
//         student2:
//         {
//             name: {
//                 getm:()=>{
//                     console.log(this);
//             },
//             get: function()
//             {
//                 console.log(this);
//             }
//         },
//             grade:"b",
//             class:"d",
//             get: function()
//             {
//                 console.log(this);
//             },
//             getm:()=>{
//                 console.log(this);
//             }
//         }
        
//     };
//     console.log(classinfo.student2.getm());
//     console.log(classinfo.student2.name.getm());
//     console.log(classinfo.student2.name.get());
//     console.log(classinfo.student2.get());
// console.log(classinfo.student2.class);


// // array of object
// const classi=[{grade:"b",class:"v"},{grade:"a",class:"cdf"}];
// console.log(classi[1].class);


// arrow function
const arr=(a,b)=>{
    console.log(this);
};



// arrow function that return the square
const sq=(n)=>(n*n);



// set inter val and clear interval     
let id=setInterval(()=>{
    console.log("hello");
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);
let length=4;



// excercise
function callback()
{
    console.log(this.length);
}
const object={
    length:5,
    method(callback)
    {
        callback();
    },
};
object.method(callback,1,2);