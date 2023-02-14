import React from 'react';

const Posts = () => {
    return (
       
            
            <div className="askForm bg-white mt-5" style={{boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.25)'}}>

               <p className='text-xl text-justify   p-3 '><span className="heading text-textColor">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, voluptas?</span>
<span className="paragraph text-darkShade text-lg">Lorem ipsum dolor sit amet consectetur  elit. Quos, soluta ... </span><button className='text-primaryColor'> more</button></p>

<div className="footer flex justify-around items-center mt-1 userNav  p-2 ">



    <span className='text-xl'>Asker</span>
    <span className='text-xl'>Time</span>
    <span className='text-xl'>Solver</span>

</div>

       


        </div>
    );
};

export default Posts;