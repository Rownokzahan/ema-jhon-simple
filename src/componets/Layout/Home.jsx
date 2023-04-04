import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='mx-6 md:mx-12 lg:mx-24 my-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;