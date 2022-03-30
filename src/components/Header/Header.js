import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold'>Welcome to my Fancy Router!!!</h1>

            <nav>
                <ul className='flex justify-center items-center'>
                    <li className='mr-4 text-xl text-white hover:text-yellow-50 p-4 bg-pink-600 hover:bg-blue-600 my-4 rounded-lg'><Link to="/">Home</Link></li>
                    <li className='mr-4 text-xl text-white hover:text-yellow-50 p-4 bg-pink-600 hover:bg-blue-600 my-4 rounded-lg'><Link to="/friends">Friends</Link></li>
                    <li className='mr-4 text-xl text-white hover:text-yellow-50 p-4 bg-pink-600 hover:bg-blue-600 my-4 rounded-lg'><Link to="/countries">Countries</Link></li>
                    <li className='mr-4 text-xl text-white hover:text-yellow-50 p-4 bg-pink-600 hover:bg-blue-600 my-4 rounded-lg'><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;