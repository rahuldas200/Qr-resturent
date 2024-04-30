import React, { useEffect, useState } from "react";
import user from "../../assets/man.png";
import edit from "../../assets/edit.png";
import banner from "../../assets/banner.jpg";
import { getUser } from "../../services/operations/auth";
import { useSelector } from "react-redux";
import Header from "./common/Header";

const Profile = () => {

  const [data , setData] = useState({});


  const {restaurantData} = useSelector((state) => state.auth);
  
  useEffect ( () => {
    setData(restaurantData?.user);
  },[restaurantData])

  console.log(data);


  return (
    <div className=" p-3 overflow-y-auto text-black dark:text-white w-full"> 
      <Header path={"Dashboard"}/> 
        
    </div>
    
  );
};

export default Profile;
