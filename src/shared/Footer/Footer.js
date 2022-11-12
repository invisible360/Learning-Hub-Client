import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-300 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <Link><FaTwitter className='text-2xl' /></Link>
                        <Link><FaYoutube className='text-2xl' /></Link>
                        <Link><FaFacebook className='text-2xl' /></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;