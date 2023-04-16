import React, { useContext } from 'react';
import logo from '/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut();
    }

    return (
        <nav className='bg-dark-gray py-7 px-6 md:px-12 lg:px-24 text-white flex flex-col md:flex-row justify-between md:items-center gap-6'>
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
                <Link className='hover:text-orange' to="/orders">Orders</Link>
                <Link className='hover:text-orange' to="/review">Order Review</Link>
                <Link className='hover:text-orange' to="/inventory">Manage Inventory</Link>

                {user ?
                    <>
                        <span>Hello, {user.email}!</span>
                        <button onClick={handleLogout} className='hover:text-orange' >Logout</button>
                    </>
                    : <Link className='hover:text-orange' to="/login">Login</Link>
                }
                
            </div>
        </nav>
    );
};

export default Header;