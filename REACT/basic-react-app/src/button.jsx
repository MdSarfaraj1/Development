export default function Button()
{
    return(
        <div>
            <form>
                 <button onClick={hahaha}>Click me</button>
            </form>
           
        </div>
    )
}
function hahaha(event){
    event.preventDefault();
    console.log("haha haha haha");
}