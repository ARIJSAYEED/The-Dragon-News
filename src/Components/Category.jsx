import React, { use } from 'react';
import { NavLink } from 'react-router';



let CategoryPromise = fetch('/categories.json').then(res => res.json());

const Category = () => {
    let categories = use(CategoryPromise)
    return (
        <div className='space-y-2'>
            <h1 className='text-xl font-semibold text-base-400'>All Categories ({categories.length})</h1>
            <div className='grid grid-cols-1 gap-1'>
                {
                    categories.map(category =>
                        <NavLink
                            key={category.id}
                            className='text-xl font-semibold text-base-400 btn rounded-sm bg-white border-none shadow-none hover:bg-base-200'
                            to={`/category/${category.id}`}
                        >{category.name}
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;