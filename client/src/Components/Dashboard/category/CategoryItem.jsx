import React, { useEffect, useReducer, useState } from "react";
import {
  createCategory,
  fetchRestaurantCategory,
} from "../../../services/operations/menu";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const CategoryItem = () => {
  const { restaurantCategory } = useSelector((state) => state.menu);
  const { token } = useSelector((state) => state.auth);
  const [categoryData, setCategoryData] = useState(null);
  const [showall, setShowAll] = useState(false);
  const dispatch = useDispatch();

  console.log(categoryData);

  const allCategoryData = (type) => {
    if (type) {
      setShowAll(true);
      setCategoryData(restaurantCategory);
    } else {
      setShowAll(false);
      setCategoryData(restaurantCategory.slice(0, 5));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchRestaurantCategory(token, dispatch);
        if (isEmpty(restaurantCategory) === false) {
          setCategoryData(restaurantCategory.slice(0, 5));
        } else {
          setCategoryData(null);
        }
      } catch (error) {
        throw new Error("fetch category data error", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const setCetagoryData = () => {
      setCategoryData(restaurantCategory);
    };
    setCetagoryData();
  }, [restaurantCategory]);

  return (
    <div className="p-2">
      {categoryData == null ? (
        <div>
          <p>Menu category list is not avaiable</p>
        </div>
      ) : (
        <div>
          <div className="flex gap-2 flex-col p-2">
            <div className="flex justify-between items-center mb-5">
              <p className="text-xl  font-semibold">Your all category list</p>
              <p>Total - {categoryData.length}</p>
            </div>
            {categoryData.map((item) => (
              <div className="flex items-center gap-4 p-2 rounded-sm bg-richwhite-200">
                <div className="max-w-28">
                  <img className="rounded-sm" src={item.thumbnail} alt="" />
                </div>
                <p className="text-base font-medium">{item.categoryName}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            {showall ? (
              <button
                onClick={() => allCategoryData(false)}
                className="p-2 bg-[#18e133] rounded-sm"
              >
                Close
              </button>
            ) : (
              <div>
                <button
                  onClick={() => allCategoryData(true)}
                  className="p-2 bg-[#18e133] rounded-sm"
                >
                  Show all..
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
