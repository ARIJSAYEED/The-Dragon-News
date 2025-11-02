import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='mx-36 flex items-center gap-4 bg-base-200 p-4 my-5'>
            <div>
                <h1 className='text-white bg-secondary px-6 py-3 font-medium text-xl'>LATEST</h1>
            </div>
            <div className='flex'>


                {/* <h1 className='text-lg font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</h1> */}


                <Marquee pauseOnHover className='text-lg font-semibold p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nam deserunt sint sed assumenda laudantium, quis at et iusto harum inventore odio tenetur earum praesentium ad pariatur saepe sequi tempora minus culpa sit, tempore eligendi totam? Esse, optio! Unde vero dicta, magnam dolorem corrupti nostrum placeat iusto laborum praesentium sed?</Marquee >
            </div>
        </div>
    );
};

export default LatestNews;