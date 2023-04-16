import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../providers/AuthProvider';
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Login = () => {

    const [displayPassword, setDisplayPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { logIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        setErrorMessage('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    return (
        <div className='my-10 mx-auto sm:w-96'>
            <div className='text-gray p-4 md:p-10 rounded-md border border-gray-light relative bg-white'>
                <h3 className='text-3xl text-center'>Login</h3>

                <p className='text-red text-center mt-8 mb-4'>{errorMessage}</p>

                <form onSubmit={handleLogin}>
                    <div className='flex flex-col gap-2'>
                        <label className='pl-2' htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' className='w-full rounded p-2 border border-gray-light outline-0' />
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='pl-2' htmlFor="password">Password</label>

                        <div className='relative'>
                            <input type={displayPassword ? "text" : "password" } name='password' id='password' className='w-full rounded p-2 pr-8 border border-gray-light outline-0' />

                            <div className='absolute pr-2 right-0 top-1/2 transform -translate-y-1/2 w-max'>                                
                                {displayPassword ?
                                    <RiEyeOffFill onClick={() => setDisplayPassword(!displayPassword)} />
                                    : <RiEyeFill onClick={() => setDisplayPassword(!displayPassword)} />
                                }                                
                            </div>
                        </div>                        
                    </div>

                    <button type='submit' className='bg-plum mt-8 text-dark-gray font-semibold w-full p-4 rounded-md' >Login</button>
                    <p className='text-xs mt-2 text-center'>New to Ema-Jhon? <Link to='/signup' className='text-orange'>Create New Account</Link></p>
                </form>

                <div className='relative'>
                    <hr className='border-t border-gray-light my-10 mx-8' />
                    <span className='bg-white px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>or</span>
                </div>

                <button className='w-full rounded p-2 border border-gray-light flex items-center justify-center'>
                    <FcGoogle className='w-6 h-6 mr-2' />
                    Continue With Google
                </button>

                <div className='absolute h-full inset-0 bg-plum rounded-md top-3 -left-3 right-3 -z-10'></div>
            </div>

        </div>
    );
};

export default Login;