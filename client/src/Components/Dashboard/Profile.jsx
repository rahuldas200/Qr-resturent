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
    <div className=" p-3 overflow-y-auto text-black dark:text-white w-"> 
      <Header path={"Dashboard"}/> 
        
      {/* <div className=" mt-2 flex items-center justify-center flex-col gap-2 ">
        <img src={user} alt="" className="w-32 shadow-md rounded-full" />
      </div>
      
      <div className=" rounded-md bg-richwhite-100 dark:bg-richblack-800 p-5 mt-5 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2  px-4 py-2 rounded-md">
            <h4 className="text-base">Restuarent Name : {data.restuarentName} </h4>
          </div>
          <div>
            <button className="px-3 py-2 bg-blue-600 rounded-md flex gap-2 items-center">
              <img src={edit} alt="" className="w-6" />
              <p>Edit</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2  px-4 py-2 rounded-md">
          <p className="text-base">Resturent email : {data.email}</p>
        </div>
        <div className="flex flex-col gap-2 px-4 py-2 rounded-md">
          <p className="text-base">Restuarent About</p>
          <p className="text-sm opacity-65">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            optio sit placeat maiores? Dolorum hic delectus, velit assumenda
            alias id eveniet iure. Aut quo doloribus, itaque unde architecto
            saepe nam.
          </p>
        </div>

        <div className="flex flex-col gap-2 px-4 py-4 rounded-md opacity-100">
            <p>Banner image : </p>
          <img src={banner} alt="" className="rounded-md" />
        </div>
      </div> */}
    </div>
    
  );
};

export default Profile;
