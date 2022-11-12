import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkOutInfo = useLoaderData ();
    return (
        <div className='min-h-screen'>
            <div className='py-1'></div>
            <h1 className="text-5xl font-bold text-center my-10">Name of the Course: <span className='text-orange-400'>{checkOutInfo.title}</span></h1>

            <h1 className='text-5xl text-center font-bold my-20'>More Features Are Coming Soon....</h1>


        </div>
    );
};

export default Checkout;