import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div className="carousel mx-auto w-full h-64 md:h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80" className="w-full" alt='' />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>

                        <div className="hero text-white md:mb-32">
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-3xl md:text-5xl font-bold">Welcome to Learning Hub</h1>
                                    <p className="py-6">Learning Platform Under Development.</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80" className="w-full" alt='' />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <h1 className='text-3xl md:text-5xl font-bold text-center text-white mb-40 md:mb-60'>Best Learning Site</h1>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80" className="w-full" alt='' />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <h1 className='text-3xl md:text-5xl font-bold text-center text-white mb-40 md:mb-60'>Under Development</h1>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;