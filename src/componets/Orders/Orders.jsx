import React, { useState } from 'react';
import Cart from '../Cart/Cart'
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { deleteShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {

    const data = useLoaderData();
    const [cart, setCart] = useState(data);

    const deleteCartItem = (id) => {
        const remaining = cart.filter(item => item._id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        console.log("js");
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='grid gap-5'>
                {cart.map(item => <ReviewItem
                    key={item._id}
                    item={item}
                    deleteCartItem={deleteCartItem}
                ></ReviewItem>)}
            </div>
            <Cart
                cart={cart}
                clearCart={clearCart}
            >
                <Link to={'/checkout'} className='bg-orange flex justify-between rounded text-white px-6 py-2'>
                    Proceed Checkout
                    <FontAwesomeIcon className='ml-2' icon={faCheckToSlot} />
                </Link>
            </Cart>
        </div>
    );
};

export default Orders;