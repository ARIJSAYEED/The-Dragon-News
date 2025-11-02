import React from 'react';
import User from '../assets/user.png'
import { Link } from 'react-router';
const NavBar = () => {
    return (
        <div className='flex justify-between mx-36'>
            <div className='w-1/3'>

            </div>
            <div className='w-1/3 flex items-center justify-center'>
                <ul className='flex gap-3 text-base-400'>
                    <Link to='/'>Home</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Career</Link>
                </ul>
            </div>
            <div className='flex gap-3 w-1/3 justify-end'>
                <img src={User} alt="" />
                <button className='btn btn-primary px-10 py-4 text-white rounded-none shadow-none'>Log in</button>
            </div>
        </div>
    );
};

export default NavBar;