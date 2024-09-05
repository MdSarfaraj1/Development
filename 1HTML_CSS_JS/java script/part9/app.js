let links=document.querySelectorAll(".box a");
for(let i=0;i<links.length;i++)
    {
        links[i].style.color="green";
    }
for(link of links)
   {
                link.style.textDecoration="underline";
        }
// Create an element in insert it in html
let newp=document.createElement('p');
newp.innerText=("hello kamino");
let body=document.querySelector('body');// selecting body tag
// adding element to end of body
body.appendChild(newp);
 

// let btn=document.createElement("button");//creating element button
// let box=document.querySelector('.box');// selecting desired location
// btn.innerText=("dffgdsfg");
// box.append(btn);// add to the end
// box.append("fdgfhcvbncvhfghj");
// box.prepend(btn);// add to the begining

let para=document.createElement("p");
para.innerText=("I am red");
para.setAttribute("style","color:red;");
// or create a css class red and para.classList.add(red);
// but will not work as given inline style in  previous
let container=document.querySelector('.ab');
container.append(para);


let btn=document.createElement("button");
let input=document.createElement("input");
btn.classList.add("btnc");
btn.innerText=("Click me");
input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");
let box=document.querySelector(".ab");
box.append(btn,input);
let h1=document.createElement("h1");
h1.innerText=("DDOM parctise");
h1.classList.add("hd");
box.append(h1);