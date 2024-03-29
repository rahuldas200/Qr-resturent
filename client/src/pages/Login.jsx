import React from 'react'
import { useForm } from "react-hook-form";

const Login = () => {

  const {
    register,
    handleSubmit,
    getValues,
    setValues,
    formState: { errors },
  } = useForm();

  const submitHandlaer = (data) => {
    console.log(data)
  }

  return (
    <div className="text-white flex justify-center items-center h-screen">
      <div className="p-5 bg-slate-600 rounded-md">

        <div className="mt-5">
          <h3 className="text-3xl text-center">Restuarent registation</h3>
          <p>Enter your details to get login to your account</p>
        </div>

        {/* form start here */}

        <form onSubmit={handleSubmit(submitHandlaer)} className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="">
              Restuarent email <span>*</span>
            </label>
            <input type="text"
              id="email"
               {...register("email",{required:true})}
             />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">
              Email <span>*</span>
            </label>
            <input 
              type="password" 
              id="password"
              {...register("password",{required:true})}
            />
          </div>

          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login
