import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { MdTableRestaurant } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import Order from "../assets/order.png";
import table from "../assets/table.png";
import Manus from "../Components/Dashboard/Manus";
import Ordres from "../Components/Dashboard/Ordres";
import Tables from "../Components/Dashboard/Tables";
import Profile from "../Components/Dashboard/Profile";

const sideLink = [
  {
    id: 1,
    title: "Profile",
    link: "/profile",
    icon: <FaUserAlt className="text-blue-600" />,
  },
  {
    id: 2,
    title: "Manus",
    link: "/manu",
    icon: <IoFastFoodOutline className="text-green-500" />,
  },
  {
    id: 3,
    title: "Tables",
    link: "/profile",
    icon: <img src={table} alt="" className="w-6" />,
  },
  {
    id: 4,
    title: "Orders",
    link: "/orders",
    icon: <img src={Order} alt="" className="w-6" />,
  },
  {
    id: 5,
    title: "Logout",
    link: "/manu",
    icon: <CiLogout className="text-[#e64343]" />,
  },
];

const Dashboard = () => {
  const [viewComponent, setViewComponent] = useState(1);

  const handleClick = (id) => {
    setViewComponent(id);
  };

  return (
    <div className="flex relative">
      <div className="bg-[#161616] w-[15%]  p-3 flex flex-col gap-3 fixed left-0 h-screen">
        {sideLink.map((item) => (
          // border-b-[1px] border-b-white border-opacity-30
          <div
            onClick={() => handleClick(item.id)}
            className="text-base font-normal text-white flex gap-3 p-3 items-center bg-[#424141] rounded-md opacity-70"
            key={item.id}
          >
            {item.icon}
            <p className="">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#242424] w-[85%] min-h-screen absolute right-0 p-3">
        {viewComponent === 1 && <Profile />}
        {viewComponent === 2 && <Manus />}
        {viewComponent === 3 && <Tables />}
        {viewComponent === 4 && <Ordres />}
        {viewComponent === 5 && <div className="text-white"> Are you sure</div>}
      </div>
    </div>
  );
};

export default Dashboard;
