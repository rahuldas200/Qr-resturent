import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = ({setview}) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValues,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const id = "advsijkna9oqw568985"

  const submitHandlaer = async () => {
    console.log(getValues())
    navigate(`/dashboard/${id}`,)
  };

  return (
    <div  data-aos="zoom-in" className="text-white  h-full w-full flex justify-center items-center">
      <div className="p-5 bg-[#242424] rounded-md mt-12 ">
        <div className="mt-5 text-center mb-6">
          <h3 className="text-3xl text-center mb-2">Restuarent Login</h3>
          <p>Enter your details to get login to your account</p>
          <p onClick={()=> setview(false)} className="mt-2 text-blue-600 cursor-pointer">I have't account</p>
        </div>

       

        {/* form start here */}

        <form
          onSubmit={handleSubmit(submitHandlaer)}
          className="flex flex-col gap-2"
        >
          <div className="flex flex-col">
            <label htmlFor="">
              Restuarent email <span>*</span>
            </label>
            <input
              type="text"
              id="email"
              {...register("email", { required: true })}
              className="p-2 pl-3 bg-[#302f2f] rounded-md text-base"
              placeholder="Enter your restuarent name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">
              Password <span>*</span>
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="p-2 pl-3 bg-[#302f2f] rounded-md text-base"
              placeholder="Enter your restuarent name"
            />
          </div>

          <div className="flex justify-center">
            <button className="py-2 px-3 rounded-md mt-3 bg-blue-700">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
