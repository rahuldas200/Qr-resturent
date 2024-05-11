import React, { useEffect, useReducer, useState } from "react";
import { createCategory } from "../../../services/operations/menu";
import { useSelector } from "react-redux";

const CategoryItem = () => {
  const { restaurantCategory } = useSelector((state) => state.menu);
  const [categoryData, setCategoryData] = useState([]);

  // useEffect(() => {
  //   setCategoryData(restaurantCategory);
  // }, [restaurantCategory]);
  console.log(restaurantCategory)

  return (
    <div className="p-2">
      {categoryData == null ? (
        <div>
          <p>Menu category list is not avaiable</p>
        </div>
      ) : (
        <div className="flex gap-2 flex-col p-2">
          <p className="text-xl mb-5 font-semibold">Your all category list</p>
         {
          categoryData.map( (item) => (
            <div className="flex items-center gap-4 p-2 rounded-sm bg-richwhite-200">
              <div className="max-w-28">
                <img className="rounded-sm" src={item.thumbnail} alt="" />
              </div>
              <p className="text-base font-medium">{item.categoryName}</p>
            </div>
          ))
         }
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
