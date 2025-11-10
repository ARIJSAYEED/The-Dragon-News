import React, { Suspense } from 'react';
import Category from './Category';
import Loading from './Loading';

const LeftSection = () => {
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <Category></Category>
            </Suspense>
        </div>
    );
};

export default LeftSection;