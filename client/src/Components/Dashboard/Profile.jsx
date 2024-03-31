import React from "react";
import user from "../../assets/man.png";
import edit from "../../assets/edit.png";
import banner from "../../assets/banner.jpg";
const Profile = () => {
  return (
    <div className="text-white p-3 overflow-y-auto">
      <div>
        <p> User profile</p>
      </div>
      <div className=" mt-2 flex items-center justify-center flex-col gap-2 ">
        <img src={user} alt="" className="w-32 shadow-md rounded-full" />
        <div>
          <input type="file" name="" id="" />
        </div>
      </div>

      <div className="bg-[#424141]  bg-opacity-70 opacity-80 rounded-md p-5 mt-5 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2  bg-[#1e1e1e] px-4 py-2 rounded-md">
            <h4 className="text-base">Restuarent Name : </h4>
            <p className="text-sm opacity-65">Magic pin</p>
          </div>
          <div>
            <button className="px-3 py-2 bg-blue-600 rounded-md flex gap-2 items-center">
              <img src={edit} alt="" className="w-6" />
              <p>Edit</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-[#1e1e1e] px-4 py-2 rounded-md">
          <p className="text-base">Resturent email </p>
          <p className="text-sm opacity-65">Rdas53300@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2 bg-[#1e1e1e] px-4 py-2 rounded-md">
          <p className="text-base">Restuarent About</p>
          <p className="text-sm opacity-65">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            optio sit placeat maiores? Dolorum hic delectus, velit assumenda
            alias id eveniet iure. Aut quo doloribus, itaque unde architecto
            saepe nam.
          </p>
        </div>

        <div className="flex flex-col gap-2 bg-[#1e1e1e] px-4 py-4 rounded-md opacity-100">
            <p>Banner image : </p>
          <img src={banner} alt="" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
