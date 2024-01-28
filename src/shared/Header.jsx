import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center px-2 border-b py-3'>
            <h2 className='text-xl font-semibold text-blue-600'><Link to="/">My Accounting</Link></h2>
            {/* menu bar area */}
            <ul className='flex justify-between items-center gap-2'>
                <li><Link className='font-bold text-gray-700 hover:bg-blue-500 p-1' to="">About</Link></li>
                <li><Link className='font-bold text-gray-700 hover:bg-blue-500 p-1' to="">Services</Link></li>
                <li><Link className='font-bold text-gray-700 hover:bg-blue-500 p-1' to="">Calculas</Link></li>
            </ul>
        </div>
    );
};

export default Header;