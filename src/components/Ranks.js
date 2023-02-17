import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import userPhoto from "../assets/images/tg.svg";
import UserNav from "../pages/shared/Navbar/UserNav";
// import UserSolvedNav from "../pages/shared/Navbar/UserSolvedNav";

const Ranks = () => {
  return (
    <div className="max-w-[560px] mx-auto  my-3">
      <div className="bg-white  shadow-md">
        <div className="flex justify-between items-center px-5 py-3 ">
          <div className="usersInfo flex items-center justify-center gap-5">
            <div className="profilePic w-[60px] h-[60px] bg-bgColor flex items-center justify-center">
              <img src={userPhoto} alt="profile pic" />
            </div>
            {/* pfolile info */}
            <div className="profileInfo">
              <p className="text-textColor text-lg">Rank</p>
              <p className="text-textColor text-lg">Date</p>
            </div>
          </div>
          {/* points */}
          <div className="poients ">
            <div className="grid grid-cols-3 gap-5">
              <p className="text-textColor text-lg flex items-center justify-center gap-3">
                <AiOutlineQuestionCircle />
              </p>
              <p className="text-textColor text-lg flex items-center justify-center gap-3">
                <AiOutlineQuestionCircle /> 000000
              </p>
              <p className="text-textColor text-lg flex items-center justify-center gap-3">
                <AiOutlineQuestionCircle /> 000000
              </p>
            </div>

            {/* next */}

            <div className="grid grid-cols-3">
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
        </div>
        <div className="userNav   py-3   ">
          {/* NavLInks */}
          <UserNav />
        </div>
        {/* user static navbar */}
        <div className="userNav   py-3   ">
          {/* NavLInks */}
          {/* <UserSolvedNav/> */}
        </div>
      </div>
    </div>
  );
};

export default Ranks;
