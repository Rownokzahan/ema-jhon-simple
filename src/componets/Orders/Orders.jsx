import React, { useState } from 'react';
import Cart from '../Cart/Cart'
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {

    const data = useLoaderData();
    const [cart, setCart] = useState(data);

    const deleteCartItem = (id) => {
        const remaining = cart.filter(item => item.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='grid gap-5'>
                {cart.map(item => <ReviewItem key={item.id} item={item} deleteCartItem={deleteCartItem}></ReviewItem>)}
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Orders;