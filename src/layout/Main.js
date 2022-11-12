import React, { useState } from 'react';
import { Theme } from 'react-daisyui';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const Main = () => {

    const [theme, setTheme] = useState(false);

    const handleDarkMode = () => {
        setTheme(!theme);
    }
    return (
        <div>
            <Header handleDarkMode={handleDarkMode}></Header>

            {
                theme ?
                    <Theme dataTheme='dark'>
                        <Outlet />
                        <Footer />
                    </Theme>
                    :
                    <Theme dataTheme='light'>
                        <Outlet />
                        <Footer />
                    </Theme>
            }

        </div>
    );
};

export default Main;