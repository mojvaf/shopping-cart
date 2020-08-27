import React, { useState } from 'react';
import Products from './components/Products'
import Cart from './components/Cart'
import './App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart'


function App(product) {
  const [cart, setCart] = useState([])
  const [page, setPage] = useState(PAGE_PRODUCTS)


  const navigateTo = (nextPage) => {
    setPage(nextPage)
  }




  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View products</button>
      </header>
      {page === PAGE_PRODUCTS && (<Products cart={cart} setCart={setCart} />)}
      {page === PAGE_CART && (<Cart cart={cart} setCart={setCart} />)}
    </div>
  );
}

export default App;
