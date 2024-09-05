let cont=document.querySelector("#cont");
console.log(cont);
let ele=document.querySelector("div>div");
cont.classList.add("container");
ele.classList.add("flex");
let input=document.querySelector("input");
let position={top:0,left:0};
function update(){
    ele.style.top = position.top + "px";
    ele.style.left = position.left + "px";
}
input.addEventListener("keydown",function(e){
    const step=10;
    if (e.code === "ArrowDown") {
        position.top = Math.min(position.top + step, cont.clientHeight - ele.clientHeight);
    } else if (e.code === "ArrowUp") {
        position.top = Math.max(position.top - step, 0);
    } else if (e.code === "ArrowLeft") {
        position.left = Math.max(position.left - step, 0);
    } else if (e.code === "ArrowRight") {
        position.left = Math.min(position.left + step, cont.clientWidth - ele.clientWidth);
    }
    update();
        
});