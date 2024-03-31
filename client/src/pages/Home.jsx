import React, { useState } from "react";
import Lottie from "lottie-react";
import Animation from "../assets/animation/Animation - 1711622905776.json";
import Login from "./Login";
import Registation from "../pages/Registation";
import Navbar from "../Components/Nav/Navbar";

const Home = () => {
  const [view, setview] = useState(true);

  return (
    <>
      <Navbar/>
    <div className=" w-11/12 h-[40rem] mx-auto m-5 flex justify-center items-center rounded-md">
      <div className="w-[35%] h-[90%] mb-10 opacity-65 rounded-lg b text-white flex ">
        {view ? <Login setview={setview} /> : <Registation setview={setview} />}
      </div>
    </div>
    </>
  );
};

export default Home;
