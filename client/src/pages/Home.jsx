import React, { useEffect, useState } from "react";
import Login from "../Components/auth/Login";
import Registation from "../Components/auth/Registation";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [view, setview] = useState(true);
  const {token} = useSelector( (state) => state.auth);
  const {restaurantData} = useSelector( (state) => state.auth);
  console.log(restaurantData);

  const navigate = useNavigate();

  useEffect ( () => {
    if(token !== null){
      navigate(`/restaurant/${restaurantData.user._id}/dashboard`)
    }
  
  },[])

  return (
    <>
    <div className=" w-11/12 h-screen mx-auto  flex justify-center items-center rounded-md bg-white">
      <div className=" rounded-lg b text-white flex ">
        {view ? <Login setview={setview} /> : <Registation setview={setview} />}
      </div>
    </div>
    </>
  );
};

export default Home;
