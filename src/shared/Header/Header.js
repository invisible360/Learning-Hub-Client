import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logohub from '../../assests/ithub.png'
import ReactTooltip from 'react-tooltip';
import { AuthContext } from '../../context/AuthConext/AuthProvider';
import ThemeToogle from '../ThemeToogle/ThemeToogle';

const Header = ({ handleDarkMode }) => {
    const { user, logOut } = useContext(AuthContext);
    // console.log (user.displayName)
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-accent drop-shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/courses'>All Courses</Link></li>
                        <li><Link to='#faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>

                <Link to='/' className='p-2'>
                    <div className='flex items-center'>
                        <img className='w-8 md:w-16 rounded-xl' src={logohub} alt="" />
                        <span className='text-sm md:text-2xl text-white font-bold ml-2 md:ml-4'>LearningHUB</span>
                    </div>
                </Link>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='font-bold text-white text-lg ml-5'><Link to='/home'>Home</Link></li>
                    <li className='font-bold text-white text-lg ml-5'><Link to='/courses'>All Courses</Link></li>
                    <li className='font-bold text-white text-lg ml-5'><Link to='/faq'>FAQ</Link></li>
                    <li className='font-bold text-white text-lg ml-5'><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>

            <div className="navbar-end avatar">
                <ThemeToogle handleDarkMode={handleDarkMode} />
                {
                    user && user?.uid ?
                        <>
                            <button onClick={handleSignOut} className="btn btn-link text-orange-700 no-underline text-sm md:text-lg">Log Out</button>
                            <ReactTooltip type="success" place="bottom" effect="float" data-padding="8px" />
                            <div data-tip={user.displayName} className="w-10 md:w-16 rounded-full">
                                <img src={user.photoURL} alt='' />
                            </div>
                        </>
                        :
                        <>
                            <button className="btn btn-link text-green-700 no-underline text-sm md:text-lg"><Link to='/login'>Log In</Link></button>

                        </>
                }

            </div>
        </div>


    );
};

export default Header;