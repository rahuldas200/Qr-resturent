import React ,{useState} from "react";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import OtpInput from 'react-otp-input';

const Registation = () => {

  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(null)

  const {
    register,
    handleSubmit,
    getValues,
    setValues,
    formState: { errors },
  } = useForm();

  const submitHandlaer = (data) => {

    if(data.password !== data.confirmPassword){
      swal("Oops!", "Passwords not match!", "error");
    }

    data.otp = otp;

    console.log(data)
  };

  return (
    <div className="text-white flex justify-center items-center h-screen">
      <div className="p-5 bg-slate-600 rounded-md">

        <div className="mt-5">
          <h3 className="text-3xl text-center">Restuarent registation</h3>
          <p>Enter your details to get registered to your account</p>
        </div>

        {/* form start here */}

        <form onSubmit={handleSubmit(submitHandlaer)} className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="">
              Restuarent name <span>*</span>
            </label>
            <input type="text"
              id="restuarentName"
               {...register("restuarentName",{required:true})}
             />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">
              Email <span>*</span>
            </label>
            <input 
              type="email" 
              id="email"
              {...register("email",{required:true})}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">
              Password <span>*</span>
            </label>
            <input 
              type="password"
              id="password"
               {...register("password",{required:true})}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">
              Confirm password <span>*</span>
            </label>
            <input 
              type="password"
              id="confirmPassword"
               {...register("confirmPassword",{required:true})}
            />
          </div>
          {
            showOtp && (
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            )
          }
          {
            showOtp ? (
              <div>
                  <button type="submit">Register</button>
              </div>
            ):(
              <div>
                <button onClick={() => setShowOtp(!showOtp)} type="submit">Send otp</button>
              </div>
            )
          }
        </form>
      </div>
    </div>
  );
};

export default Registation;
