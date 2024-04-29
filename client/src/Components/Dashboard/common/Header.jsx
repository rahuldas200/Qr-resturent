import React, { useState,useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { WiDayCloudy } from "react-icons/wi";

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
    <div className="flex justify-between bg-richwhite-50 dark:bg-richwhite-800 p-2 rounded-md">
      <div>
        <p>{path}</p>
      </div>
     <div>
      {theme === "dark" ? (
          <div className="p-2 bg-richwhite-50 rounded-full cursor-pointer dark:bg-richblack-800 shadow-md">
            <WiDayCloudy onClick={themeChange} className=" text-white" />
          </div>
        ) : (
          <div className="p-2 bg-richwhite-50 shadow-md  rounded-full cursor-pointer">
            <FaMoon onClick={themeChange} className=" text-black" />
          </div>
        )}
     </div>
    </div>
  );
};

export default Header;
