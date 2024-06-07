import { useState, useEffect } from "react";
// import ProductDescription from "./ProductDescription";
import "./ecommerce.css";

function Products() {
  const [products, setProducts] = useState([]);
  // const { handleAddtoCart, isAddToCart, HandleRemoveFromCart } = useContext(context)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProducts(result);
      });
  }, []);

  return (
    <>
      <main>
        <h2>Products</h2>
        <div className="products">
          {products.map((product, index) => {
            return (
              <>
                <div key={index} className="product">
                  <a href={`/productDescription/${product.id}`}>
                    <img src={product.image}></img>
                  </a>
                  <h3>
                    <a href={`/productDescription/${product.id}`}>
                      {product.title}
                    </a>
                  </h3>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Products;
// export {products};
