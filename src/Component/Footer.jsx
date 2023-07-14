import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='p-7 bg-slate-700 lg:20 text-white '>
            <div className="lg:max-w-7xl lg:mx-auto lg:flex lg:justify-around">
                <h1>Copyright © 2023. All rights are reserved</h1>
                <div className="flex justify-center gap-10 mt-4 lg:mt-0">
                    <span><FaGithub color='white' size={30}></FaGithub></span>
                    <span><FaLinkedin color='white' size={30}></FaLinkedin></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;