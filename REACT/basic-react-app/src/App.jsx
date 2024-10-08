import './App.css'
import Product from './mini activity/product'
import Button from './button'

//import Product from './product.jsx'

function App() {
          // return (
          //   <div>
          //   <Product title="tab" features={["hi"]}/> {/* as the price is not providing so it will use the default value i.e. 1*/}
          //   <Product title="iphone" features={['hi-quality','water-resistance','strong']}/>
          //   {/* if we send the features array just like above jsx will print all elements without seperating them but to print
          //   them separate we can use the below or the thing shown in product.jsx line 8*/}
          //   <Product title="mobile" price={3000} features={[<li>'hi-quality'</li>,<li>water-resistance</li>]} />
          //   </div>
          
          // )
          //=======================================
          // return( // mini activity
          //   <>
          //     <Product/>
          //   </>
          // )
      return (
        <>
        <Button/>
        </>
      )
  
}

export default App
