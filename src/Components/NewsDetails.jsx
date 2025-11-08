import React, { useEffect, useState } from 'react';
import Header from './Header';
import RightSection from './RightSection';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    let data = useLoaderData();
    let {id} = useParams();
    let [news,setNews] = useState({});
    useEffect(()=>{
        let NewsDetails = data.find(singleNews=>singleNews.id == id)
        setNews(NewsDetails)
    },[data,id])
    return (
        <div className='max-w-[1340px] mx-auto space-y-5'>
            <header>
                <Header></Header>
            </header>
            <div className='grid grid-cols-12 gap-4 mx-36'>
                <div className='col-span-9 h-full space-y-4'>
                    <h1 className='text-xl font-semibold text-base-400 '>Dragon News</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </div>
                <div className='col-span-3 h-full'>
                    <RightSection></RightSection>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;