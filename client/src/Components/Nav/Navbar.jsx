import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      data-aos="zoom-in"
      className=" bg-[#242424] rounded-md text-base  mt-3 w-11/12 mx-auto flex justify-between gap-6 p-4 text-white pb-3 items-center"
    >
      <div>
        <h4 className="uppercase font-semibold">Qr-restuarent</h4>
      </div>

      <ul className="flex justify-between gap-11 uppercase text-sm font-semibold">
        <li className="cursor-pointer hover:opacity-75  hover:transition-all">
          About
        </li>
        <li className="cursor-pointer">Try it</li>
        <li className="cursor-pointer">Documentation</li>
        <li className="cursor-pointer">Contract</li>
      </ul>

      <div className="flex gap-5 text-sm font-semibold ">
        <button
          className="uppercase"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <button
          className="uppercase "
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
