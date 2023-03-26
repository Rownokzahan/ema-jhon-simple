import React from 'react';

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product;
    return (
        <div className='rounded border-2 border-gray-light flex flex-col justify-between'>
            <div className='p-2'>
                <img src={img} className='h-60 w-full rounded mb-3' alt="product" />

                <h3 className='text-2xl font-semibold'>{name}</h3>
                <h4 className='text-xl font-semibold'>Price: ${price}</h4>
            </div>
            <div>
                <p className='px-2 text-gray mt-4'>Manufacturer : {seller}</p>
                <p className='px-2 text-gray'>Rating : {ratings} star</p>
                <button className='bg-plum hover:bg-orange w-full rounded-b border-t-2 border-t-gray-light p-4 mt-3 font-semibold'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;