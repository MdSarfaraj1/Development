import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState('');
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="80bc93a77cd53c2152d5b7d414b398e9";
     async function getWeatherInfo(){
        // let data = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);

        // let jsonData=await data.json();
        let result={
            city:city,
            temp:205,
            tempMin:20,
            tempMax:30,
            humidity:25.3,
            feelslike:24.35,
            weather:"gvery bad"
        }
        updateInfo(result);
        
    }
  
    function handleChange(event){
        setCity(event.target.value);
    }
    function handleSubmission(event){
        event.preventDefault();
       getWeatherInfo();
        setCity('');

    }
    return(
        <div>
            <form onSubmit={handleSubmission}>
                 <TextField id='city' label="Search city" required value={city} onChange={handleChange}></TextField >&nbsp;&nbsp;&nbsp;
               <Button type='submit' variant="contained" size='big'>Search</Button>
            </form>
           
        </div>
    )
}

///api key 6d365e38d154f19d384327a7bc88b312