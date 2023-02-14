import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const FormBtn = {name:'Filter',icons:FiSearch }
const FormInputData  = {inputPlaceholder:'Find Your Problem'}

const Find = () => {
    const [focused,setFocused]= useState(false)
    
    return (
        <div className='md:max-w-[50%] mx-auto bg-green-400 my-3'>
            
            <div className="askForm bg-white p-3   custom-shadow">

                <form  className='flex gap-2'>
                    <input
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    
                    className='w-full rounded-full bg-white border border-deepShade outline-none  p-2  placeholder:pl-3 placeholder:text-lg placeholder:text-textColor ' type="text" placeholder={FormInputData.inputPlaceholder} />

                    {

focused ? <button className='text-xl px-2  bg-primaryColor  rounded-full  border border-deepShade '><FiSearch  className='text-white' size={25}/></button>
:
<button className='text-xl px-12  bg-white  rounded-full  border border-deepShade '>{FormBtn.name}</button>

                    }
                    
                </form>

            </div>


        </div>
    );
};

export default Find;