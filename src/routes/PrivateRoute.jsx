import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='min-h-[calc(100vh-60px)] flex justify-center items-center'>
                <div className='flex text-7xl items-end'>
                    L
                    <div
                        className="h-9 w-9 mb-2 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                    </div>
                    ding...
                </div>
            </div>
        );
    }

    if (!user) {
       return <Navigate to="/login" state={{ from: location }} replace />
        
    }
    
    return children;
};

export default PrivateRoute;