import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/operations/auth";
import { useDispatch, useSelector } from "react-redux";

const Login = ({setview}) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandlaer =  async () => {
    const data = getValues();
    
    await login(data,navigate,dispatch);
    
  };

  

  return (
      <div data-aos="zoom-in" className=" bg-[#f5f5f5] p-5 border-opacity-65 rounded-sm  text-black shadow-2xl border-[1px] border-black">
        <div className="mt-5  mb-6">
          <h3 className="text-3xl mb-2">Restuarent Login</h3>
          <p className="">Enter your details to get login to your account</p>
        </div>

       

        {/* form start here */}

        <form
          onSubmit={handleSubmit(submitHandlaer)}
          className="flex flex-col gap-2"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="">
              Restuarent email/ID <span>*</span>
            </label>
            <input
              type="text"
              id="email"
              {...register("email", { required: true })}
              className="p-2 pl-3 bg-[#ebe9e9] rounded-md text-base"
              placeholder="Enter your restuarent name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">
              Password <span>*</span>
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="p-2 pl-3 bg-[#ebe9e9] rounded-md text-base"
              placeholder="Enter your restuarent name"
            />
          </div>
          <p onClick={()=> setview(false)} className="mt-2 mr-4 text-end text-blue-600 cursor-pointer">I have't account</p>

          <div className="flex justify-center">
            <button className="py-2 px-3 rounded-sm text-white mt-3 bg-richwhite-950">
              Login
            </button>
          </div>
        </form>
      </div>
  );
};

export default Login;
