import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const { signUp } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        setErrorMessage('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password can not be less than 6 characters');
            return;
        }

        signUp(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                form.reset();
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    return (
        <div className='my-10 mx-auto sm:w-96'>
            <div className='text-gray p-4 md:p-10 rounded-md border border-gray-light relative bg-white'>
                <h3 className='text-3xl text-center'>Sign Up</h3>

                <p className='text-red text-center mt-8 mb-4'>{errorMessage}</p>

                <form onSubmit={handleSignUp}>
                    <div className='flex flex-col gap-2'>
                        <label className='pl-2' htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' className='w-full rounded p-2 border border-gray-light outline-0' required />
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='pl-2' htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' className='w-full rounded p-2 border border-gray-light outline-0' required />
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='pl-2' htmlFor="confirm_password">Confirm Password</label>
                        <input type="password" name='confirm_password' id='confirm_password' className='w-full rounded p-2 border border-gray-light outline-0' required />
                    </div>

                    <button type='submit' className='bg-plum mt-8 text-dark-gray font-semibold w-full p-4 rounded-md' >Sign Up</button>
                    <p className='text-xs mt-2 text-center'>Already Have An Account? <Link to='/login' className='text-orange'>Login</Link></p>
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

export default SignUp;