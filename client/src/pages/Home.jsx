import React from "react";
import Lottie from "lottie-react";
import Animation from "../assets/animation/Animation - 1711622905776.json";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full flex-col gap-2 "  >
      <div >
        <h1 data-aos="flip-up" className="text-6xl uppercase space-x-4 font-bold lin">
          Create your restuarent Smart
        </h1>
        <h1 data-aos="flip-down" className="text-6xl uppercase space-x-4 font-bold lin">
          Using our product
        </h1>
      </div>
    </div>
  );
};

export default Home;
