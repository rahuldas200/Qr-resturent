import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../common/Header";

const Profile = () => {
  const [data, setData] = useState({});

  const { restaurantData } = useSelector((state) => state.auth);

  useEffect(() => {
    setData(restaurantData?.user);
  }, [restaurantData]);

  console.log(data);

  return (
    <div className="text-black dark:text-white w-full">
      <Header path={"Profile"} />
    </div>
  );
};

export default Profile;
