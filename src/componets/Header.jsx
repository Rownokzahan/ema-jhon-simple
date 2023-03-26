import React from 'react';
import logo from '../images/Logo.svg';

const Header = () => {
    return (
        <nav className='bg-dark-gray py-7 px-6 md:px-12 lg:px-24 text-white flex flex-col md:flex-row justify-between md:items-center gap-6'>
            <img src={logo} alt="" />
            <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
                <a className='hover:text-orange' href="/">Order</a>
                <a className='hover:text-orange' href="/">Order Review</a>
                <a className='hover:text-orange' href="/">Manage Inventory</a>
                <a className='hover:text-orange' href="/">Login</a>
            </div>
        </nav>
    );
};

export default Header;