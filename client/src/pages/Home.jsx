import React, { useState } from "react";
import Lottie from "lottie-react";
import Animation from "../assets/animation/Animation - 1711622905776.json";
import Login from "../Components/auth/Login";
import Registation from "../Components/auth/Registation";
import Navbar from "../Components/Nav/Navbar";
import OTPInput from "react-otp-input";


const Home = () => {
  const [view, setview] = useState(true);

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
