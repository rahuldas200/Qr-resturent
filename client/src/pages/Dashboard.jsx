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
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAnglesLeft } from "react-icons/fa6";
import { useEffect } from 'react';
import { FaMoon } from "react-icons/fa";
import { WiDayCloudy } from "react-icons/wi";

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
  const [menu_Burger,set_Menu_Burger] = useState(true);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [dark , setDark] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    if (screenWidth < 768) {
      set_Menu_Burger(true);
    } else {
      set_Menu_Burger(false);
    }
  }, [screenWidth]); 

  

  const handleClick = (id) => {
    setViewComponent(id);
  };

  const togel_menu_Burger = () => {
    set_Menu_Burger(false)
  }

  const togel_AngalLeft = () => {
    set_Menu_Burger(true)
  }

  return (
    <div className="flex relative ">
      <div className="bg-[#161616]   p-3 flex flex-col gap-3 h-full ">
        {
          menu_Burger ? (
            <div onClick={togel_menu_Burger} className="max-sm:"> 
              <GiHamburgerMenu   className="text-white text-2xl font-bold" />
            </div>
          ) 
          : (
              <>
                <div className="flex justify-end gap-6 items-center p-2 bg-blue-600 rounded-sm">
                  {
                    dark ?(
                      <div  className="p-2 bg-blue-900 rounded-full"> 
                        <FaMoon className=" text-white"/>
                      </div>
                    ) : (
                      <div className="p-2 bg-blue-900 rounded-full">
                          <WiDayCloudy className=" text-white"/>
                      </div>
                    )
                  }

                   <div className="p-2 bg-blue-900 rounded-full">
                      <FaAnglesLeft onClick={togel_AngalLeft}  className="text-white  font-bold"/>
                   </div>
                </div>
                {
                  sideLink.map((item) => (
                    // border-b-[1px] border-b-white border-opacity-30
                    <div
                      onClick={() => handleClick(item.id)}
                      className="text-base min-w-36 cursor-pointer font-normal text-white flex gap-3 p-3 items-center bg-[#424141] rounded-sm opacity-70"
                      key={item.id}
                    >
                      {item.icon}
                      <p className="">{item.title}</p>
                    </div>
                  ))
                }
              </>
          )
        }
        
      
        
      </div>
      <div className="bg-[#242424]  min-h-screen p-3">
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
