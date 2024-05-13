import React from "react";
import Header from "../common/Header";
import ImgUploader from "./ImgUploader";
import CategoryItem from "./CategoryItem";
import { createCategory } from "../../../services/operations/menu";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRestaurantCategory } from "../../../slices/menu";

const Category = () => {
  const { token } = useSelector((state) => state.auth);
  const [imageSrc, setImageSrc] = useState(null);
  const [categoryName, setCetegory] = useState("");
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();
  const { restaurantCategory } = useSelector((state) => state.menu);

  const handelCategoryNameChange = (e) => {
    setCetegory(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("categoryName", categoryName);
    formData.append("file", imageSrc);

    try {
      const response = await createCategory(formData, token,dispatch);
      if (response) {
        setCetegory("");
        setPreview(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-10 h-screen">
      <Header path={"Cetagory"} />
      <div className="grid grid-cols-2 gap-5 ">
        <div className=" rounded-sm bg-richwhite-50">
          <CategoryItem />
        </div>

        <div className="bg-richwhite-50 max-h-full rounded-sm text-sm p-3 flex flex-col gap-3 ">
          <p className="text-center text-lg font-semibold">Add menu Category</p>
          <form onSubmit={submitHandler} className="flex flex-col gap-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="categoryName">Enter Category name</label>
              <input
                type="text"
                id="categoryName"
                className="p-2 pl-3 bg-[#ebe9e9] rounded-md text-base"
                placeholder="Burger"
                onChange={handelCategoryNameChange}
                value={categoryName}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Upload your category thumbnail</label>
              <ImgUploader
                setImageSrc={setImageSrc}
                imageSrc={imageSrc}
                preview={preview}
                setPreview={setPreview}
              />
            </div>
            <div className=" flex justify-center mt-4">
              <button
                type="submit"
                className="px-3 py-2 bg-[#55ff3f] rounded-sm"
              >
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Category;
