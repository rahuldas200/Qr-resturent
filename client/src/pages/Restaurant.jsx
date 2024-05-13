
import React, { useState,createContext,useContext } from "react";
import { useSelector } from "react-redux";
import SideBar from "../Components/Dashboard/common/SideBar";
import {Outlet} from 'react-router-dom'
import LogOutModal from "../Components/auth/LogOutModal";
import AddMenuModal from "../Components/Dashboard/menuItem/AddMenuModal";
import { useOpen } from "../contexts/OpenContext";



const Restaurant = () => { 
    const { loading } = useSelector( (state) => state.auth);
    const {open, setOpen} = useOpen(null);

    return (
      <div className="relative">
      {
        loading ? (<span className="text-black text-4xl mt-0">Loading</span>) : 
        (
          <div className="flex relative bg-richwhite-200 w-screen  min-h-[calc(100vh-3.5rem)]">
            <SideBar setOpen={setOpen} open = {open}/>
            <div className="dark:bg-richblack-900 bg-richwhite-200  min-h-screen p-3 h-[calc(100vh-3.5rem)] flex-1 overflow-auto ">
              <div className="">
                <Outlet setOpen={setOpen} open={open}/>
              </div>  
            </div>
          </div>
        )
      }
      {
        open === 'log-out' && (
          <LogOutModal 
            title={"Are you sere?"}
            description ={"You will be loged out from here"}
            setOpen={setOpen}
          />
        )
      }
      {
        open === 'add-menu' && (
          <AddMenuModal
          />
        )
      }
    </div>
      
    );
  
}

export default Restaurant
