import React, { useEffect, useState } from 'react';
import Product from './Product';
import Cart from './Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCard = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='md:grid grid-cols-2 lg:grid-cols-6'>
            <div className='lg:col-span-5 md:p-8 lg:p-16'>
                <div className='grid lg:grid-cols-3 gap-4 lg:gap-8'>
                    {products.map(product => <Product product={product} key={product.id} handleAddToCard={handleAddToCard}></Product>)}
                </div>
            </div>
            <div className='h-max sticky top-16 mt-16'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;