import Bottomportion from "./bottomPortion";
import { TopPortion } from "./topPortion";
import './final.css';

export default function Finalresult({idx})
{
    let oldPRice=["1254","5448","4547"];
    let newPrice=["1","2","3"];
    return(
        <div className="final">
        <TopPortion/>
        <Bottomportion old={oldPRice[idx]} newp={newPrice[idx]}/>
    </div>
    )
    
}
