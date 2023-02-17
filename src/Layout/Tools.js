import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar/Navbar';
import ToolsNav from '../pages/shared/Navbar/ToolsNav';

const Tools = () => {
    return (
        <div className="bg-bgColor min-h-screen text-textColor">
        <Navbar/>
        <div className="max-w-[560px] mx-auto bg-white  pt-3 z-30">
        <ToolsNav/>
      <Outlet/>
        </div>

    
            </div>
    );
};

export default Tools;