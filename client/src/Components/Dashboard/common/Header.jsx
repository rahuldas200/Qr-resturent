import React, { useState,useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { WiDayCloudy } from "react-icons/wi";
import { IoIosNotificationsOutline } from "react-icons/io";


const Header = ({path}) => {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex justify-between items-center w-full bg-richwhite-50 dark:bg-richwhite-700 p-2 rounded-sm">
      <div className="ml-4 flex text-base font-medium text-richwhite-900 dark:text-richwhite-100">
        <p>{path}</p>
      </div>

     <div className="flex gap-5 items-center mr-9 text-richblack-950 dark:text-richwhite-100">
        {theme === "dark" ? (
            <div className="p-2 bg-richwhite-200 rounded-full cursor-pointer dark:bg-richblack-900 shadow-md">
              <WiDayCloudy onClick={themeChange} className=" text-white" />
            </div>
          ) : (
            <div className="p-2 bg-richwhite-200 shadow-md  rounded-full cursor-pointer">
              <FaMoon onClick={themeChange} className=" text-black" />
            </div>
          )}
          <div>      
            <div className="p-2 bg-richwhite-200 shadow-md  rounded-full cursor-pointer dark:bg-richblack-900">
              <IoIosNotificationsOutline className="text-base"/>
            </div>
          </div>
          |
          <div className=" text-richblack-950 dark:text-richwhite-100">
            <p>Magic pin </p>
          </div>
     </div>
    
    </div>
  );
};

export default Header;
