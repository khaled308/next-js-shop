import { LuLayoutDashboard } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import {
  FaBox,
  FaClipboardList,
  FaListUl,
  FaUserFriends,
} from "react-icons/fa";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <ul className="mt-8">
      <MenuItem href="#">
        <LuLayoutDashboard size={24} />
        <span className="ml-4">Dashboard</span>
      </MenuItem>
      <MenuItem href="#">
        <FaBox size={24} />
        <span className="ml-4">Products</span>
      </MenuItem>
      <MenuItem href="#">
        <FaListUl size={24} />
        <span className="ml-4">Categories</span>
      </MenuItem>
      <MenuItem href="#">
        <FaClipboardList size={24} />
        <span className="ml-4">Orders</span>
      </MenuItem>
      <MenuItem href="#">
        <FaUserFriends size={24} />
        <span className="ml-4">Users</span>
      </MenuItem>
      <MenuItem href="#">
        <CiSettings size={24} />
        <span className="ml-4">Settings</span>
      </MenuItem>
    </ul>
  );
};

export default Menu;
