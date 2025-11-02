import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {

    let { id } = useParams()
    let data = useLoaderData()
    let [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data);
            return;
        } else if (id == '1') {

            let filteredData = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredData)
        } else {
            let filteredData = data.filter(news => news.category_id == id);
            setCategoryNews(filteredData)
        }
    }, [data, id])

    return (
        <div className='space-y-2'>
            <div>
                <h1 className='font-semibold text-xl'>Total <span className='text-secondary'>
                    {categoryNews.length}</span> news found</h1>
            </div>
            <div className='grid grid-cols-1 gap-3'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;