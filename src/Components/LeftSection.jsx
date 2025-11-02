import React, { Suspense } from 'react';
import Category from './Category';

const LeftSection = () => {
    return (
        <div>
            <Suspense fallback={<p>loading..</p>}>
                <Category></Category>
            </Suspense>
        </div>
    );
};

export default LeftSection;