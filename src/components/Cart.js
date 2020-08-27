import React from 'react'



const Cart = ({ cart, setCart }) => {

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((product) => product !== productToRemove))
    }

    return (

        <>
            <h2>Cart</h2>
            <div className='products'>
                {cart.map((product, indx) => (
                    <div className='product' key={indx}>
                        <h3>{product.name}</h3>
                        <h4>{product.price}</h4>
                        <img src={product.image} />

                        <button onClick={() => removeFromCart(product)}>Remove from cart</button>
                    </div>
                ))}
            </div>
        </>

    )
}
export default Cart