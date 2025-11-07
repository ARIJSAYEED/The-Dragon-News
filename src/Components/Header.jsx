import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='mt-12 flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center space-y-2'>
                <Link to='/'><img src={logo} alt="" /></Link>
                <h1 className='text-accent'>Journalism Without Fear or Favour</h1>
                <div className='flex gap-1 font-semibold'>
                    <h1 className='text-base-400'>{format(new Date(), 'EEEE,')}</h1>
                    <h1 className='text-accent'>{format(new Date(), 'MMMM dd, yyyy')}</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;