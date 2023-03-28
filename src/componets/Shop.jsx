import React, { useEffect, useState } from 'react';
import Product from './Product';
import Cart from './Cart/Cart';
import { addToDb, getShoppingCart } from '../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const savedProduct = products.find(product => product.id === id);
            if (savedProduct) {
                const quantity = storedCart[id];
                savedProduct.quantity = quantity;
                savedCart.push(savedProduct);
            }
        }
        setCart(savedCart);
    }, [products]); // this products dependency makes sure products has been loaded

    const handleAddToCard = (product) => {
        let newCart = [];

        const exits = cart.find(pd => pd.id === product.id);
        if (!exits) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            product.quantity += 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, product];
        }

        setCart(newCart);
        addToDb(product.id);
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