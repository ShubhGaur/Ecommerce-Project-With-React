import React, { useEffect, useState } from 'react'
import Parent from './Parent.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserHeader from './UserHeader.jsx'
import SignIn from './SignIn'
import Registration from './Registration'
import Header from './Header'
import Hommie from './Hommie'
import Cart from './Cart.jsx'
import Products from './Products.jsx'
import About from './About.jsx'
import Checkout from './Checkout.jsx'
import Orders from './Orders.jsx'
import ProductDescription from './ProductDescription.jsx'
import { createContext } from 'react'

export const context = createContext();


function Ecommerce() {
  // const [featured, setFeatured] = useState([])
  let userData = [];


  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setProducts(result);
  //       })
        
  //       }, []);

  return (<>
    <context.Provider value = {{
        userData
    }}
    >
        <BrowserRouter>
            <UserHeader/>
            <Header />
            <Routes>
                <Route path='/' element={<Parent />}>
                    <Route index element={<Hommie />}></Route>
                    <Route path='ProductDescription/:id' element={<ProductDescription />}></Route>               
                </Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/products' element={<Parent />}>
                    <Route index element={<Products />}></Route>
                    <Route path='productDescription/:id' element={<ProductDescription />}></Route>               
                </Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/cart' element={<Checkout />}></Route>
                <Route path='/orders' element={<Orders />}></Route>
                <Route path='/registration' element={<Registration />}></Route>
                <Route path='/signin' element={<SignIn />}></Route>

                
            </Routes>
        </BrowserRouter>
        </context.Provider>

    </>

  )
}

export default Ecommerce