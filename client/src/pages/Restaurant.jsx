import React, { useState } from "react";
import { useSelector } from "react-redux";
import SideBar from "../Components/Dashboard/common/SideBar";
import {Outlet} from 'react-router-dom'




const Restaurant = () => { 
    const { loading } = useSelector( (state) => state.auth);

    return (
      <>
        {
          loading ? (<span className="text-black text-4xl">Loading</span>) : 
          (
            <div className="flex relative bg-richwhite-200 w-screen">
              <SideBar/>
              <div className="dark:bg-richblack-900 bg-richwhite-50  min-h-screen p-3 min-w-[100%]">
                <Outlet/>
              </div>
            </div>
          )
        }
      </>
      
    );
  
}

export default Restaurant
