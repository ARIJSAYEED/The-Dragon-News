import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import SocialLinks from './SocialLinks';
import QZone from './QZone';
import bg from '../assets/bg.png'

const RightSection = () => {
    return (
        <div className='space-y-6'>
            <div className='space-y-4'>
                <h1 className='text-xl font-semibold text-base-400 '>Login With</h1>
                <button className='btn btn-outline w-full btn-secondary rounded-sm'>
                    <FcGoogle size={24}></FcGoogle>
                    Login with Google
                </button>
                <button className='btn btn-outline w-full btn-primary rounded-sm'>
                    <FaGithub size={24}></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className='space-y-4'>
                <h1 className='text-xl font-semibold text-base-400'>Find Us On</h1>
                <SocialLinks></SocialLinks>
            </div>
            <div>
                <QZone></QZone>
            </div>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightSection;