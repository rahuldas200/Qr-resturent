import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { registation } from "../../services/operations/auth";
import { login } from "../../services/operations/auth";

const Otp = ({ data }) => {
  const [otp, setOtp] = useState(null);

  const handleclick = async () => {

    if (otp.length !== 6) {
      alert("please entered 6 digit otp");
    }

    const formData = { ...data };
    formData.otp = otp;

    setOtp(null);
    const response = await registation(formData);
    console.log(response);

    if(response.success === true){
      const loginData = {
        email:response.user.email,
        password : formData.password,
      }

      const login_response = await login(loginData);
    }



  };

  return (
    <div data-aos="zoom-in" className=" bg-[#f5f5f5]  text-black border-[1px] border-black shadow-xl p-5 rounded-md border-opacity-20">
      <div>
        <h1 className="text-xl font-semibold  text-center mb-10">
          Enter your otp hear
        </h1>
      </div>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderInput={(props) => <input {...props} />}
        containerStyle={"flex justify-between flex-wrap "}
        inputStyle={{
          
          border: "1px solid transparent",
          borderRadius: "5px",
          width:"54px",
          height: "54px",
          fontSize: "20px",
          color: "#1c0404",
          fontWeight: "600",
          caretColor: "white",
          background: "#ebe9e9",
          margin:"10px"
        }}
      />

      <div className="mt-5 flex justify-between">
        <button
          onClick={handleclick}
          className="py-2 px-3 bg-blue-600 rounded-sm text-white text-[]"
        >
          Registered
        </button>
        <button className="py-2 px-3 bg-amber-500 rounded-sm text-white">
          Resent Otp
        </button>
      </div>
    </div>
  );
};

export default Otp;
