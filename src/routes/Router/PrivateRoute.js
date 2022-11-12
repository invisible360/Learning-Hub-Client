import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthConext/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <>
            <div className='flex justify-center items-center my-48'>
                <progress className="progress progress-accent w-1/2"></progress>
            </div>
        </>
    }

    if (user && user?.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;