import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAnglesLeft } from "react-icons/fa6";
import { CgLogOut } from "react-icons/cg";


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
    <div className={`p-2 ${menu_Burger ? "min-w-15" :"w-60 "}  flex flex-col gap-3 h-screen dark:bg-richblack-700`}>
      {
        menu_Burger ? (
          <div
            onClick={() => set_Menu_Burger(!menu_Burger)}
            className="p-2 rounded-full bg-richwhite-50 shadow-md "
          >
            <GiHamburgerMenu className="text-black text-2xl font-bold" />
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-6  p-1 rounded-lg ">
              <div className="p-2 w-full flex justify-end bg-richwhite-50 shadow-md cursor-pointer  rounded-full dark:bg-richblack-800">
                <FaAnglesLeft
                  onClick={() => set_Menu_Burger(!menu_Burger)}
                  className="text-black opacity-70  font-bold dark:text-white mr-2"
                />
              </div>
              <div className="flex flex-col gap-2 text-base font-normal">
                {
                sideLink.map( (data) => (
                <details key={data.id} className="bg-richwhite-50 dark:bg-richblack-900 dark:text-richwhite-200 cursor-pointer shadow-lg p-1 rounded-md ">
                    <summary className="list-none p-2">{data.title}</summary>
                      <div className="flex flex-col gap-2 p-2  rounded-md ">
                        {
                          data.aditionalLink?.map(additionalLink => (
                          <div key={additionalLink.id} className="flex flex-col bg-richwhite-200 dark:bg-richblack-800 p-2 rounded-md shadow-sm">
                            {additionalLink.title}
                          </div>
                          ))
                        }
                      </div>
                </details>
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
