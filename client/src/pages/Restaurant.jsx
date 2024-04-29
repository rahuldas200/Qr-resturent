import React, { useState } from "react";
import { CgLogOut } from "react-icons/cg";
import Manus from "../Components/Dashboard/Manus";
import Ordres from "../Components/Dashboard/Ordres";
import Tables from "../Components/Dashboard/Tables";
import Profile from "../Components/Dashboard/Profile";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import SideBar from "../Components/Dashboard/common/SideBar";
import {Outlet} from 'react-router-dom'


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

const Restaurant = () => { 
    const { loading } = useSelector( (state) => state.auth);

    return (
      <>
        {
          loading ? (<span className="text-black text-4xl">Loading</span>) : 
          (
            <div className="flex relative bg-richwhite-200 w-screen ">
              <SideBar/>
              <div className="dark:bg-richblack-900 bg-richwhite-50  min-h-screen p-3">
                <Outlet/>
              </div>
            </div>
          )
        }
      </>
      
    );
  
}

export default Restaurant
