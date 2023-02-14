import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../../components/Posts';



const Ask = () => {
    const FormBtn = {name:'Filter',icons:'' }
    
   
    return (
        <div className='md:max-w-[50%] mx-auto bg-green-400 my-3'>
            
            <div className="askForm bg-white p-3" style={{boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.25)'}}>

                <div  className='flex gap-2 '>
                    {/* <input className='w-full rounded-full bg-white border border-deepShade outline-deepShade outline-[0.5px] p-2  placeholder:pl-3 placeholder:text-lg placeholder:text-textColor ' type="text" placeholder={FormInputData.inputPlaceholder} /> */}

<div className='w-full rounded-full bg-white border border-deepShade outline-deepShade outline-[0.5px] p-2  placeholder:pl-3 placeholder:text-lg placeholder:text-textColor '><Link className='pl-4 '>Post Your Problem</Link></div>

                    <button className='text-xl px-12  bg-white  rounded-full  border border-deepShade'>{FormBtn.name}</button>
                </div>

            </div>

            <Posts/>


        </div>
    );
};

export default Ask;