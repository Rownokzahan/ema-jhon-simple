import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Product from './Product';

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
            <div className='bg-plum p-6 h-max sticky top-16 mt-16'>
                <h3 className='text-xl text-center font-semibold'>Order Summary</h3>
                <div className='text-gray my-12 flex flex-col gap-4'>
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${cart.reduce((previous, current) => previous + current.price, 0)}</p>
                    <p>Total Shipping Charge: $5</p>
                    <p>Tax: $114</p>
                    <h3 className='text-xl font-semibold'>Grand Total: $1559</h3>
                </div>
                <button className='bg-red w-full rounded text-white px-6 py-2 mb-4'>Clear Cart <FontAwesomeIcon className='ml-2' icon={faTrashCan} /></button>
                <button className='bg-orange w-full rounded text-white px-6 py-2'>Remove Order <FontAwesomeIcon className='ml-2' icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Shop;