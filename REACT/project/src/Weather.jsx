import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function Weather(){
    let [info,setInfo]=useState({
         city:"Delhi",
        temp:25,
        tempMin:200,
        tempMax:30,
        humidity:25.3,
        feelslike:24.35,
        weather:"good"
    });
    function updateInfo(newInfo){
        setInfo(newInfo);
    }
    return(
        <>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={info}/>
        </>
        
     
    )
}