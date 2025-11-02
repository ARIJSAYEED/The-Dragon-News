import React from 'react';
import Swim from '../assets/swimming.png'
import Class from '../assets/class.png'
import Play from '../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 space-y-4 p-4 rounded-sm'>
            <div>
                <h1 className='text-xl font-semibold text-base-400'>QZone</h1>
            </div>
            <div className='space-y-2'>
                <img src={Swim} alt="" />
                <img src={Class} alt="" />
                <img src={Play} alt="" />
            </div>

        </div>
    );
};

export default QZone;