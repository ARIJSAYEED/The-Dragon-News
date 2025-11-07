import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    console.log(news);
    return (
        <div className='space-y-5 p-8 border border-base-300 shadow-lg rounded-sm'>
            <div>
                <img className='w-[790px] rounded-sm object-cover' src={news.image_url} alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-bold'>{news.title}</h1>
            </div>
            <div>
                <p className='text-[16px] font-normal text-base-400'>{news.details}</p>
            </div>
            <div>
                <Link to='/'><button className='btn btn-secondary'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;