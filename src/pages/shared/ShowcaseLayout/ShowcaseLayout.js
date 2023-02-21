import React from 'react';
import PostDetails from './PostDetails';

import ShowCaseFooter from './ShowCaseFooter';
import ShowcaseHeader from './ShowcaseHeader';

const ShowcaseLayout = () => {
    return (
        <div className='bg-white relative h-[80vh] w-[560px] mx-auto custom-shadow '>
           <ShowcaseHeader/>
           <PostDetails/>
            
           <ShowCaseFooter/>
        </div>
    );
};

export default ShowcaseLayout;