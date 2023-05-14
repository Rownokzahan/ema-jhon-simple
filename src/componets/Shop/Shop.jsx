import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(10);

    const { totalProducts } = useLoaderData();
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];


    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&&limit=${productsPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, productsPerPage]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const ids = Object.keys(storedCart);
        fetch(`http://localhost:5000/productsByIds`, {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(cartProduct => {
                const savedCart = [];
                for (const id in storedCart) {
                    const savedProduct = cartProduct.find(product => product._id === id);
                    if (savedProduct) {
                        const quantity = storedCart[id];
                        savedProduct.quantity = quantity;
                        savedCart.push(savedProduct);
                    }
                }
                setCart(savedCart);
            })

    }, []);

    const handleAddToCard = (product) => {
        let newCart = [];

        const exits = cart.find(pd => pd._id === product._id);
        if (!exits) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            product.quantity += 1;
            const remaining = cart.filter(pd => pd._id !== product._id);
            newCart = [...remaining, product];
        }

        setCart(newCart);
        addToDb(product._id);
    }

    const clearCart = () => {
        console.log("js");
        setCart([]);
        deleteShoppingCart()
    }

    const options = [10, 15, 20];
    const handleSelectChange = (event) => {
        setProductsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }

    return (
        <>
            <div className='md:grid grid-cols-2 lg:grid-cols-6'>
                <div className='lg:col-span-5 md:p-8 lg:p-16'>
                    <div className='grid lg:grid-cols-3 gap-4 lg:gap-8'>
                        {products.map(product => <Product
                            product={product}
                            key={product._id}
                            handleAddToCard={handleAddToCard}
                        ></Product>)}
                    </div>
                </div>

                <div className='h-max sticky top-16 mt-16'>
                    <Cart
                        cart={cart}
                        clearCart={clearCart}
                    >
                        <Link to={'/orders'} className='bg-orange w-full rounded text-white px-6 py-2 whitespace-nowrap'>
                            Review Order
                            <FontAwesomeIcon className='ml-2' icon={faArrowRight} />
                        </Link>
                    </Cart>
                </div>
            </div>

            <div className='md:p-8 lg:p-16 text-center'>
                <p className='mb-2 text-sm'>Current Page : {currentPage}</p>
                {pageNumbers.map(number => <button
                    key={number}
                    className={`py-2 px-4 border ${currentPage === number ? "bg-orange" : ""}`}
                    onClick={() => setCurrentPage(number)}
                >{number + 1}</button>)}

                <select name="" id="" className='ml-2 py-2 px-2' defaultValue={productsPerPage} onChange={handleSelectChange}>
                    {options.map((option, index) => <option key={index}>{option}</option>)}
                </select>
            </div>

        </>
    );
};

export default Shop;