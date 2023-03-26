import React from 'react';
import logo from '../images/Logo.svg';

const Header = () => {
    return (
        <nav className='bg-dark-gray py-7 px-24 text-white flex justify-between items-center'>
            <img src={logo} alt="" />
            <div className='flex gap-8'>
                <a className='hover:text-orange' href="/">Order</a>
                <a className='hover:text-orange' href="/">Order Review</a>
                <a className='hover:text-orange' href="/">Manage Inventory</a>
                <a className='hover:text-orange' href="/">Login</a>
            </div>
        </nav>
    );
};

export default Header;