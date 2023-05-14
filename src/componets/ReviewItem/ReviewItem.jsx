import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = (props) => {
    
    const { _id, img, name, price, quantity } = props.item;

    return (
        <div className='p-2 rounded border border-gray-light flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex flex-col md:flex-row gap-4'>
                <img src={img} className='md:w-24 md:h-24 rounded' alt="" />
                <div>
                    <h3 className='text-xl'>{ name }</h3>
                    <p>Price: <span className='text-orange'>${price}</span> </p>
                    <p>Order Quantity: <span className='text-orange'>{quantity}</span> </p>
                    <p>Shipping Charge : <span className='text-orange'>$5</span> </p>
                </div>
            </div>

            <div className='w-max text-center'>
                <button onClick={() => props.deleteCartItem(_id)} className='text-red bg-[#eb57574d] w-full rounded-full'>
                    <FontAwesomeIcon className='text-2xl p-4 px-5' icon={faTrashCan} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;