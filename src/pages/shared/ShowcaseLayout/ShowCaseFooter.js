import React from 'react';
import { Link } from 'react-router-dom';

const ShowCaseFooter = () => {
    return (
        <div className="footer mt-auto flex justify-between px-3 py-2 border-t border-t-darkShade absolute bottom-0 w-full">
       <div className="flex justify-around items-center w-full">
        <div><Link>Time</Link></div>
      <div>  <Link>solve</Link></div>
       </div>

      </div>
    );
};

export default ShowCaseFooter;