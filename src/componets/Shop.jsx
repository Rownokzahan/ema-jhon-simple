import React, { useEffect, useState } from 'react';
import Product from './Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='grid grid-cols-6'>
            <div className='col-span-5 p-24'>
                <div className='grid grid-cols-3 gap-12'>
                    {products.map(product => <Product product={product} key={ product.id }></Product>)}
                </div>
            </div>
            <div className='bg-plum p-6'>
                <h3 className='text-xl text-center font-semibold'>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;