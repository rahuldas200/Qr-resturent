import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAnglesLeft } from "react-icons/fa6";
import { CgLogOut } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdDashboard } from "react-icons/md";
import { GrUnorderedList } from "react-icons/gr";
import { MdRestaurantMenu } from "react-icons/md";
import { IoTabletLandscapeOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";



const SideBar = ({setOpen}) => {
  const { restaurantData } = useSelector((state) => state.auth);
  const sideLink = [
    {
      id: 1,
      title: "Dashboard",
      path: `/restaurant/${restaurantData.user._id}/dashboard`,
      icon: <MdDashboard />,
    },
    {
      id: 2,
      title: "Orders",
      path: `/restaurant/${restaurantData.user._id}/orders`,
      icon: <GrUnorderedList />,
    },
    {
      id: 3,
      title: "Menu item",
      path: `/restaurant/${restaurantData.user._id}/Menu`,
      icon: <MdRestaurantMenu />,
    },
    {
      id: 4,
      title: "Tables",
      path: `/restaurant/${restaurantData.user._id}/tables`,
      icon: <IoTabletLandscapeOutline />,
    },
    {
      id: 5,
      title: "Order history",
      path: `/restaurant/${restaurantData.user._id}/order-history`,
      icon: <FaHistory />,
    },
    {
      id: 6,
      title: "Notification",
      path: `/restaurant/${restaurantData.user._id}/notification`,
      icon: <IoIosNotifications />,
    },
    {
      id: 7,
      title: "Setting",
      path: `/restaurant/${restaurantData.user._id}/setting`,
      icon: <IoSettingsSharp />,
    },
  ];

  const aditionalFunction = [
    {
      id: 1,
      title: "Restaurant Closed",
      icon: <IoLockClosedOutline />,
    },
    {
      id: 2,
      title: "Logout",
      icon: <CgLogOut />,
    },
  ];

  
  const [menu_Burger, set_Menu_Burger] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    if (screenWidth < 768) {
      set_Menu_Burger(true);
    } else {
      set_Menu_Burger(false);
    }
  }, [screenWidth]);

  const handleClick = async (id) => {
    if (id === 2) {
      setOpen(true);
    } else {
      console.log("close");
    }
  };

  return (
    <div
      className={`p-0 ${
        menu_Burger ? "min-w-16" : "w-52 "
      } bg-richwhite-50 flex flex-col items-center  gap-3 h-screen dark:bg-richblack-700`}
    >
      {menu_Burger ? (
        <div
          onClick={() => set_Menu_Burger(!menu_Burger)}
          className="text-richwhite-100 mt-4 p-2 rounded-md bg-[#4ab74c9f]"
        >
          <GiHamburgerMenu className="k text-xl font-bold" />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2 h-full  p-0 rounded-sm mt-2">
            <div className="p-2 w-full flex justify-end mt-3 bg-[#4ab74c9f] dark:bg-[#4ab74c9f] bg-richwhite-50 shadow-md cursor-pointer  rounded-sm dark:bg-richblack-800">
              <FaAnglesLeft
                onClick={() => set_Menu_Burger(!menu_Burger)}
                className="text-black opacity-70  font-bold dark:text-white mr-2"
              />
            </div>
            <div className=" dark:text-richwhite-100 flex flex-col gap-1 h-full justify-between text-base font-normal">
              <ul>
                {sideLink.map((data) => (
                  <li key={data.id} className="py-2 flex items-center gap-2">
                    <div className="pl-2 text-lg">{data.icon}</div>
                    <Link to={data.path}>{data.title}</Link>
                  </li>
                ))}
              </ul>
              <ul className="mb-8">
                {aditionalFunction.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className=" cursor-pointer py-2 flex items-center gap-3"
                  >
                    <div className="pl-2">{item.icon}</div>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
