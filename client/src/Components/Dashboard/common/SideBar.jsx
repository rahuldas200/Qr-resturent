import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAnglesLeft } from "react-icons/fa6";
import { CgLogOut } from "react-icons/cg";
import {Link} from 'react-router-dom'


import { sideLink } from "../../../data/sideLink";

const SideBar = () => {

  const aditionalFunction = [
    {
      id: 5,
      title: "Logout",
      link: "/manu",
      icon: <CgLogOut/>,
    },
    {
      id: 5,
      title: "Restaurant Closed",
      link: "/manu",
      icon: <CgLogOut/>,
    },
  ]

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


  return (
    <div className={`p-0 ${menu_Burger ? "min-w-15" :"w-60 "} bg-richwhite-50 flex flex-col gap-3 h-screen dark:bg-richblack-700`}>
      {
        menu_Burger ? (
          <div
            onClick={() => set_Menu_Burger(!menu_Burger)}
            className="p-2 rounded-full bg-richwhite-50 shadow-md mt-2 "
          >
            <GiHamburgerMenu className="text-black text-xl font-bold" />
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2  p-0 rounded-sm mt-2">
              <div className="p-2 w-full flex justify-end bg-richwhite-50 shadow-md cursor-pointer  rounded-sm dark:bg-richblack-800">
                <FaAnglesLeft
                  onClick={() => set_Menu_Burger(!menu_Burger)}
                  className="text-black opacity-70  font-bold dark:text-white mr-2"
                />
              </div>
              <div className="flex flex-col gap-1 text-base font-normal">
                {
                sideLink.map( (data) => (
                  <ul className="flex flex-col gap-1 text-richwhite-100 font-normal text-sm">
                    {
                       data.aditionalLink?.map( (item) => (
                        <li className="p-2">{item.title}</li>
                       ))
                    }
                  </ul>
                ))
                }
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};

export default SideBar;
