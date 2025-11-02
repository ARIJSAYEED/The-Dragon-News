import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import LatestNews from './LatestNews';
import NavBar from './NavBar';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Root = () => {
    return (
        <div className='max-w-[1340px] mx-auto'>
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
                <NavBar></NavBar>
            </header>
            <main className='grid grid-cols-12 gap-4 mx-36 mt-10'>
                <section className='left-section col-span-3 sticky top-2 h-fit'>
                    <LeftSection></LeftSection>
                </section>
                <section className='main-section col-span-6'>
                    <Outlet></Outlet>
                </section>
                <section className='right-section col-span-3 sticky top-2 h-fit'>
                    <RightSection></RightSection>
                </section>
            </main>
        </div>
    );
};

export default Root;