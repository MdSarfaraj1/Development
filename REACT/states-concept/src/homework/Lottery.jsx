import { useState } from "react"
export default function Lottery(){
    let [ticket,setTicket]=useState(null);
    const [win, setWin] = useState("");
    function generateTicket()
    {
        let tick=Math.floor(Math.random()*900+100)
        setTicket(tick);
        let sum=0
        while(tick>0){
            let r=tick%10;
            sum+=r;
            tick=Math.floor(tick/10)
        }
      console.log(sum)
        if(sum==15){
            setWin("Congratulation! You won the ticket")
        }
       else
       setWin("Better luck next time")
    }
    return(
        <div>
        <button onClick={generateTicket}>Get New Ticket</button>
        <h3>{ticket?`Generated Ticket=${ticket}`:""}</h3>
        <h1>{win}</h1>

        </div >
    )
}