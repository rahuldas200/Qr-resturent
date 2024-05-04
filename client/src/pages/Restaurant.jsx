import React, { useState } from "react";
import { useSelector } from "react-redux";
import SideBar from "../Components/Dashboard/common/SideBar";
import {Outlet} from 'react-router-dom'




const Restaurant = () => { 
    const { loading } = useSelector( (state) => state.auth);

    return (
      <>
        {
          loading ? (<span className="text-black text-4xl mt-0">Loading</span>) : 
          (
            <div className="flex relative bg-richwhite-200 w-screen  min-h-[calc(100vh-3.5rem)]">
              <SideBar/>
              <div className="dark:bg-richblack-900 bg-richwhite-200  min-h-screen p-3 h-[calc(100vh-3.5rem)] flex-1 overflow-auto ">
                <div className="">
                  <Outlet/>
                </div>  
              </div>
            </div>
          )
        }
      </>
      
    );
  
}

export default Restaurant
