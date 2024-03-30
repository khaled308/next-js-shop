"use client";

import { useState } from "react";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { CiSettings } from "react-icons/ci";
import { MdLogout } from "react-icons/md";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer rounded-full transition hover:shadow"
      >
        <Avatar />
      </div>
      {isOpen && (
        <ul className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 focus:outline-none">
          <MenuItem href="#">
            <CiSettings />
            <span>Edit Profile</span>
          </MenuItem>
          <MenuItem href="#">
            <MdLogout />
            <span>Logout</span>
          </MenuItem>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
