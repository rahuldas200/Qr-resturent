import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import Otp from "../Components/Otp";

const Registration = ({ setview }) => {
  const [showOtp, setShowOtp] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const data = getValues();
    console.log(data);
    setShowOtp(true);
   
  };

  return (
    <div className="w-full flex flex-col mt-10">
      {showOtp  ? (
        <Otp data={getValues()}/>
        
      ) : (
        <div  data-aos="zoom-in" className="p-5 bg-[#242424] rounded-md">
          <div onClick={() => setview(true)} className=" cursor-pointer flex gap-2 items-center text-blue-500 font-semibold">
            <IoArrowBack className="font-bold"/>
            <p>Back to login</p>
          </div>
          <div className="mt-5 text-center mb-5">
            <h3 className="text-3xl">Restaurant registration</h3>
            <p className="opacity-70">
              Enter your details to get registered to your account
            </p>
          </div>

          {/* Form start here */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col gap-2">
              <label className="text-base" htmlFor="restuarentName">
                Restaurant name <span>*</span>
              </label>
              <input
                type="text"
                id="restuarentName"
                {...register("restuarentName", { required: true })}
                className="p-2 bg-[#302f2f] rounded-md text-base"
                placeholder="Enter your restaurant name"
              />
              {errors.restuarentName && (
                <span className="text-xs ml-3 text-red-500">
                  Restaurant name is required
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-base">
                Email <span>*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className="p-2 bg-[#302f2f] rounded-md text-base"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-xs ml-3 text-red-500">
                  Email is required
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-base">
                Password <span>*</span>
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                className="p-2 bg-[#302f2f] rounded-md text-base"
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="text-xs ml-3 text-red-500">
                  Password is required
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="text-base">
                Confirm password <span>*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
                className="p-2 bg-[#302f2f] rounded-md text-base"
                placeholder="Enter your confirm password"
              />
              {errors.confirmPassword && (
                <span className="text-xs ml-3 text-red-500">
                  Passwords do not match
                </span>
              )}
            </div>

            <div className="flex justify-center">
              <button
                className="py-2 px-3 rounded-md mt-3 bg-blue-700"
                type="submit"
              >
                Send OTP
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Registration;
