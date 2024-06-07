import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDescription() {
  // console.log(products[0].id)
  const [singleProduct, setSingleProduct] = useState({})

  const { id } = useParams();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
    .then(response => response.json())
    .then(result => setSingleProduct(result))
  }, [])
  return (<>
    <div>
      <div className="left"><img src={singleProduct.image}></img></div>
      <div className="right">
        <h2>{singleProduct.title}</h2>
        <p>{singleProduct.description}</p>
        <h4>{singleProduct.price}</h4>
        <a href=""><button onClick={(e) => handleAddtoCart(e, filter)}>Add To Cart</button></a>
      </div>
    </div>
  </>)
}

export default ProductDescription