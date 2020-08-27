import React, { useState } from 'react'



const Products = ({ setCart, cart }) => {

    const addToCart = (product) => {
        setCart([...cart, { ...product }])
    }


    const [products] = useState([
        {
            name: 'bag',
            price: '$ 200',
            image: 'https://lh3.googleusercontent.com/proxy/GRfXS99sJOle04dvWDmfv_p9eSQHVBEzS9rL9IO26W-4W-3UNeI21WUuEFFG9CwrkHnejzqd8lz9nVGQot5VAhzl7yiKQMFiRAxXa9IQRRGd1uCBAB3-gjAkvfHRUIelqvnqv5xyWQ'
        },
        {
            name: 'shoes',
            price: '$ 350',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3i3ieEwjcA9ZbHNi4OKUcO63jN_SZFyIL_w&usqp=CAU'
        },
        {
            name: 'dress',
            price: '$ 1500',
            image: 'https://i.pinimg.com/originals/4b/4c/0c/4b4c0cceea5a178edf23092775eeb91f.jpg'
        },
        {
            name: 'necklace',
            price: '$ 4.99',
            image: 'https://www.prada.com/content/dam/pradanux_products/1/1JC/1JC394/2CD0F0XSY/1JC394_2CD0_F0XSY_SLF.png'
        },
        {
            name: 'parada necklace',
            price: '$ 280',
            image: 'https://cdn-images.farfetch-contents.com/13/32/58/24/13325824_15118948_600.jpg'
        },
        {
            name: 'parada shoes',
            price: '$ 900',
            image: 'https://mp-media.reebonz.com/images/p-41/reebonz-prada-shoes-classic-black-prada-2-4153679c-bc1b-4edb-85d5-f753ba04ef59.jpg;mode=pad;bgcolor=fff;404=404.jpg;width=402;height=500;quality=100'
        }

    ])



    return (
        <div>
            <h2>Products</h2>
            <div className='products'>
                {products.map((product, indx) => (
                    <div className='product' key={indx}>
                        <h3>{product.name}</h3>
                        <h4>{product.price}</h4>
                        <img src={product.image} />
                        <button onClick={() => addToCart(product)}>add to cart</button>
                    </div>
                ))}
            </div>

        </div >
    )
}
export default Products
