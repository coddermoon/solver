import React from 'react';

const UserData = () => {
    return (
        <div className='max-w-[560px] mx-auto bg-white   custom-shadow  my-4 p-5 '>
            <div className="main-content">

                {/* task section */}
               <div className="task">
               <h3 className='text-center text-xl font-bold mb-5'>Task</h3>

            <div className="grid grid-cols-3 gap-5">
                
                <div className=' p-2'>
                    <p className='bg-bgColor px-3 text-center text-textColor'>Pending</p>
                    <p className='bg-bgColor px-3 text-center text-textColor'>0</p>

                </div>
                <div className=' p-2'>
                    <p className='bg-bgColor px-3 text-center text-textColor'>Ans Pending</p>
                    <p className='bg-bgColor px-3 text-center text-textColor'>0</p>

                </div>
                <div className=' p-2'>
                    <p className='bg-bgColor px-3 text-center text-textColor'>Save ask</p>
                    <p className='bg-bgColor px-3 text-center text-textColor'>0</p>

                </div>
                {/* second part */}
                <div className=' p-2'>
                    <p className='bg-bgColor px-3 text-center text-textColor'>Post reply</p>
                    <p className='bg-bgColor px-3 text-center text-textColor'>0</p>

                </div>
                <div className=' p-2'>
                    <p className='bg-bgColor px-3 text-center text-textColor'>Mate request</p>
                    <p className='bg-bgColor px-3 text-center text-textColor'>0</p>

                </div>
                <div className=' p-2'>
                    <p className='bg-bgColor px-3 text-center text-textColor'>Draft create</p>
                    <p className='bg-bgColor px-3 text-center text-textColor'>0</p>

                </div>
                


            </div>

               </div>
            </div>
        </div>
    );
};

export default UserData;