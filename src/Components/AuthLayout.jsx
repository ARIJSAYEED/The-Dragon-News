import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='max-w-[1340px] min-h-screen mx-auto bg-base-200'>
            <header className='pt-10'>
                <NavBar></NavBar>
            </header>
            <main className='max-w-[1340px] mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;