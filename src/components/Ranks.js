import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import userPhoto from "../assets/images/tg.svg";
import DataLayout from "../Layout/DataLayout";
import Info from "../pages/Profiles/Info";
import UserData from "../pages/Profiles/UserData";
import UserNav from "../pages/shared/Navbar/UserNav";
// import UserSolvedNav from "../pages/shared/Navbar/UserSolvedNav";

const Ranks = () => {
  return (
    <div className="max-w-[560px] mx-auto  my-3">
      <div className="bg-white  shadow-md">
        <div className="flex justify-between items-center p-3 ">
          <div className="usersInfo flex items-center justify-center gap-2 ">
            <div className="profilePic bg-bgColor p-3 flex items-center justify-center">
              <img className="w-[40px] h-[40px] " src={userPhoto} alt="profile pic" />
            </div>
            {/* pfolile info */}
            <div className="profileInfo">
              <p className="text-textColor text-lg">Rank</p>
              <p className="text-textColor text-lg">Date</p>
            </div>
          </div>
          {/* points */}
          <div className="poients ">
            <div className="grid grid-cols-3 grid-rows-2 gap-1">
              <div className="row-span-2 items-center justify-center grid  bg-bgColor">
                <p className="text-textColor text-lg  flex items-center justify-center gap-3  ">
                  <AiOutlineQuestionCircle />
                </p>
                <p className="text-textColor text-lg  flex items-center justify-center gap-3">
                   000000
                </p>
              </div>
              <p className="text-textColor text-lg flex items-center justify-center gap-3  bg-bgColor">
                <AiOutlineQuestionCircle /> 000000
              </p>

              {/* next */}

              <p className="text-textColor text-lg flex items-center justify-center gap-3 bg-bgColor">
              <AiOutlineQuestionCircle />  000000
              </p>
              <p className="text-textColor text-lg flex items-center justify-center gap-3 bg-bgColor">
                <AiOutlineQuestionCircle /> 000000
              </p>
              <p className="text-textColor text-lg flex items-center justify-center gap-3 bg-bgColor">
                <AiOutlineQuestionCircle /> 000000
              </p>
            </div>
          </div>
        </div>

{/* nav Section */}
        <div className="userNav   py-3   ">
     
     <UserNav />
{/* <Info/> */}
<UserData/>

   </div>

      </div>

    </div>
  );
};

export default Ranks;
