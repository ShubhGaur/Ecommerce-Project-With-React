import { useContext, useEffect, useState } from "react"



function Hommie() {
    const [products, setProducts] = useState([])

    // const { products } = useContext
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((result) => {
                setProducts(result);
            })

    }, []);
    const featured = products.filter((_, index) => (index + 1) % 6 === 0);


    return (<>
        <div className="content">
            <p>We Are Changing The Way People Shop</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos natus quis, consectetur consequatur ipsam facere! Tempore rem id repellendus dolores.</p>
            <button><a href="/products">Our Products</a></button>
        </div>
        <div className="Featured">
            {
                featured.map((filter,index) => {
                    return (<>
                        <div key={index} className="product">
                            <a href={`/productDescription/${filter.id}`}><img src={filter.image}></img></a>
                            <h3><a href={`/productDescription/${filter.id}`}>{filter.title}</a></h3>
                        </div>
                    </>)

                })
            }
        </div>
    </>)
}

export default Hommie