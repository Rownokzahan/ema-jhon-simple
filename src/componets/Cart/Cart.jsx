import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, clearCart, children }) => {

    let quantity = 0;
    let totalPrice = 0;
    let shippingCharge = 0;

    for (const product of cart) {
        totalPrice += product.price * product.quantity;
        shippingCharge += product.shipping;
        quantity += product.quantity;
    }

    const tax = totalPrice * 7 / 100; // Tax is 7% of Total Cost
    const grandTotal = totalPrice + shippingCharge + tax;
    return (
        <div className='bg-plum p-6'>
            <h3 className='text-xl text-center font-semibold'>Order Summary</h3>
            <div className='text-gray my-12 flex flex-col gap-4'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: ${tax.toFixed(2)}</p> { }
                <h3 className='text-xl font-semibold'>Grand Total: ${grandTotal.toFixed(2)}</h3>
            </div>
            <button onClick={clearCart} className='bg-red w-full rounded text-white px-6 py-2 mb-4'>Clear Cart <FontAwesomeIcon className='ml-2' icon={faTrashCan} /></button>
            {children}
        </div>
    );
};

export default Cart;