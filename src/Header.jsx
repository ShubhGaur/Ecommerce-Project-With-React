import React from 'react'

function Header() {
    const loggedIn = true;
    return (<>
        {(!loggedIn) ?
            <header>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                    <li>
                        <a href="/cart">Cart</a>
                    </li>
                </ul>
            </header>
            :
            <header>

                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                    <li>
                        <a href="/cart">Cart</a>
                    </li>
                    <li>
                        <a href="/cart">Checkout</a>
                    </li>
                    <li>
                        <a href="/orders">Orders</a>
                    </li>
                </ul>
            </header>
        }</>)
}

export default Header