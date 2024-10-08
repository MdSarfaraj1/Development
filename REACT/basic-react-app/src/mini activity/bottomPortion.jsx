import './bottom.css'
export default function Bottomportion({old,newp}){
    return(
         <div className='bottom'>
           
            <span style={{ textDecoration: 'line-through' }} >Old price:{old}</span>
        &nbsp; &nbsp; 
         <span>New Price:{newp}</span>
    </div>   
    )

}