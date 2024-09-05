let gameseq=[];
let userseq=[];
let random=["blue","green","red","yellow"];
let started=false;
let level=0;
let highest=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(event){
    if(started==false)
        {
         console.log("game started");  
         started=true;
        levelup();
        }
    });

function levelup(){
    userseq=[];
    level++;
    if(level>=highest){ highest=level;}
     h2.innerText=`Level ${level}`;
    let ranindex=Math.floor(Math.random()*3);
    let rancolor=random[ranindex];
    let ranbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    console.log(`level:${level}`);
    gameflash(ranbtn);
console.log(gameseq);
}
function gameflash(btn)
{
    console.log("game flash")
    btn.classList.add("flash");
    setTimeout(()=>btn.classList.remove("flash"),100);
    
}

function userflash(btn)
{
    console.log("button pressed by user");
    btn.classList.add("flash");
    setTimeout(()=>btn.classList.remove("flash"),100);
    
}
function btnpressed()
{
    let btn=this;
    userflash(btn);
    userseq.push(btn.id);
    console.log(userseq);
    checkAnswer(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
    {
        btn.addEventListener("click",btnpressed);

    }
function checkAnswer(index)
{
   
    if(userseq[index]==gameseq[index])
        {
          if(userseq.length==gameseq.length)
            setTimeout(levelup,400);

        }
        else{
            h2.innerHTML=`<b>Game Over! score:${level}</b><br>highest:${highest}<br>enter any key to continue</br>`;
           reset();
            
        }
       
}
function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}

