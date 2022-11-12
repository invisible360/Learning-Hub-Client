import React from 'react';
import Carousel from './Carousel';
import Countdown from './Countdown';

const Home = () => {
    return (
        <div className='min-h-screen'>
            {/* <h1>HOme page</h1> */}
            <Carousel></Carousel>
            <div className='py-10'></div>
            <h1 className='text-5xl text-center font-bold my-10'>More Features Are Coming Soon....</h1>
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-bold my-5'>CountDown</h1>
                <Countdown></Countdown>
            </div>
        </div>
    );
};

export default Home;