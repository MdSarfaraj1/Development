import './product.css'
function Product({title,price=1,features}){ // if price is not present set it to 1 same process for features

    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>{price}</p>
            <ul>{features.map((feature)=><li>{feature}</li>)} </ul> {/*separeting the element of the array*/}
        </div>
    )
}

export default Product