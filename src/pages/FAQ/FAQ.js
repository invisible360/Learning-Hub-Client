import React from 'react';

const FAQ = () => {
    return (
        <div id='faq'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1589229298650-FAQ%20Page.png" className="max-w-sm w-full rounded-lg shadow-2xl" alt='' />
                    <div className='flex flex-col'>
                        <div tabIndex={0} className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                Q1. How was the assignment?
                            </div>
                            <div className="collapse-content">
                                <p>somoy pai nai, family pera chilo tai kisu kaj baki, pore korbo!</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                Q1. How was the assignment?
                            </div>
                            <div className="collapse-content">
                                <p>somoy pai nai, family pera chilo tai kisu kaj baki, pore korbo!</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                            <div className="collapse-title text-xl font-medium">
                                Q1. How was the assignment?
                            </div>
                            <div className="collapse-content">
                                <p>somoy pai nai, family pera chilo tai kisu kaj baki, pore korbo!</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default FAQ;