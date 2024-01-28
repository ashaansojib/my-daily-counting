import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <p className='text-xl p-2 text-center bg-slate-50'>All Credits Gose to <Link to="/">SojibDev</Link></p>
    );
};

export default Footer;