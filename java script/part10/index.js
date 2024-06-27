let btn=document.querySelector("button");
console.dir(btn);
// btn.onclick=function() // assigning onlick property of btn by a function
// {
//     alert("button was clicked");
// }
// let btn1=document.querySelector("#k");
// btn1.onmouseenter=hello;
// function hello()
// {
//     alert("function hello");
// }
// function by()
// {
//     alert("function by");
// }


// //event listenr
// btn.addEventListener("click",hello);
// btn.addEventListener("click",by);


// ASSIGNEMNT -> COLOR GENERATOR
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let random=calback();
    h3.innerText=(random);
    let box=document.querySelector("div");
    box.style.backgroundColor=random;
});
function calback()
{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}



// keyboard event

 let inp=document.querySelector("input");
// inp.addEventListener("keypress",function(){
//     console.log("pressed");
// });

inp.addEventListener("keydown",function(e){
    console.log("down");
    console.log("code="+e.code);
    console.log("key="+e.key);
});
// inp.addEventListener("keyup",function(){
//     console.log("up");
// });


// //form event
// let form=document.querySelector("form");
// form.addEventListener("submit",function(e){
//     e.preventDefault();// hold the default work defined at html
//     // means dont go go to the action page
 
//   console.log(this.elements[0].value);
// });