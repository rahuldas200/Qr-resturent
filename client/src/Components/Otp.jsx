import React, { useState } from "react";
import OtpInput from "react-otp-input";

const Otp = ({ data }) => {
  const [otp, setOtp] = useState(null);

  console.log(data);

  const handleclick = () => {
    if (otp.length !== 6) {
      alert("please entered 6 digit otp");
    }
    console.log(otp);
    const formData = { ...data };
    formData.Otp = otp;
    console.log(formData);

    setOtp(null);
  };

  return (
    <div data-aos="zoom-in" className="p-10 bg-[#1c1c1c] rounded-md">
      <div>
        <h1 className="text-2xl font-semibold  text-center mb-10">
          Enter your otp hear
        </h1>
      </div>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderInput={(props) => <input {...props} />}
        containerStyle={"flex justify-between mb-3"}
        inputStyle={{
          border: "1px solid transparent",
          borderRadius: "8px",
          width: "54px",
          height: "54px",
          fontSize: "20px",
          color: "#fff",
          fontWeight: "600",
          caretColor: "white",
          background: "#302f2f",
        }}
      />

      <div className="mt-5 flex justify-between">
        <button
          onClick={handleclick}
          className="py-2 px-3 bg-blue-600 rounded-md text-white"
        >
          Registered
        </button>
        <button className="py-2 px-3 bg-amber-500 rounded-md text-white">
          Resent Otp
        </button>
      </div>
    </div>
  );
};

export default Otp;
