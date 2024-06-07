import React from 'react'

function featuredProductDescription() {
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
          </div>
        </div>
      </>)
}

export default featuredProductDescription