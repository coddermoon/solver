import React from "react";
import logo from "../../../assets/images/logo.svg";

import { FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import {
  activeClassName,
  navItems,
  normalClassName,
} from "../../../utils/navitems";

const DesktopNav = () => {
  return (
    <div>
      <div className="flex items-center justify-around px-4">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-8" />
          <span className="ml-2  text-xl font-medium text-primaryColor">
            Solver
          </span>
        </div>
        <div className=" flex">
          {navItems.map((navItem, index) => (
          <NavLink
              key={index}
              to={navItem.path}
              className={({ isActive }) =>
                isActive ? activeClassName : normalClassName
              }
            >
              <navItem.icons />
              <span className="hidden md:block">{navItem.name}</span>
            </NavLink>
          ))}
        </div>
        <div>
          <NavLink
            to="/tools"
            className={({ isActive }) =>
              isActive ? activeClassName : normalClassName
            }
          >
            <FiSettings /> Tools
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
