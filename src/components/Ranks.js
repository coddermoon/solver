import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import userPhoto from "../assets/images/users.png";
import UserNav from "../pages/shared/Navbar/UserNav";
import UserSolvedNav from "../pages/shared/Navbar/UserSolvedNav";

const Ranks = () => {
  return (
    <div className="md:max-w-[50%] mx-auto  my-3">
      <div className="bg-white  shadow-md">
        <div className="flex justify-between px-5 py-3 ">
          <div className="usersInfo flex items-center gap-5">
            <div className="profilePic w-[120px] h-[120px] bg-bgColor flex items-center justify-center">
              <img src={userPhoto} alt="profile pic" />
            </div>
            {/* pfolile info */}
            <div className="profileInfo">
              <p className="text-textColor text-lg">User Name</p>
              <p className="text-textColor text-lg">Occupation</p>
              <p className="text-textColor text-lg">Join</p>
              <p className="text-textColor text-lg">Point</p>
            </div>
          </div>
          {/* points */}
          <div className="poients">
            <p className="text-textColor text-lg flex items-center justify-center gap-3">
              <AiOutlineQuestionCircle /> 000000
            </p>
            <p className="text-textColor text-lg flex items-center justify-center gap-3">
              <AiOutlineQuestionCircle /> 000000
            </p>
            <p className="text-textColor text-lg flex items-center justify-center gap-3">
              <AiOutlineQuestionCircle /> 000000
            </p>
            <p className="text-textColor text-lg flex items-center justify-center gap-3">
              <AiOutlineQuestionCircle /> 000000
            </p>
          </div>
        
        </div>
        <div className="userNav   py-3   " >
    {/* NavLInks */}
<UserNav/>
</div>
{/* user static navbar */}
<div className="userNav   py-3   " >
    {/* NavLInks */}
<UserSolvedNav/>
</div>
      </div>

    </div>
  );
};

export default Ranks;
