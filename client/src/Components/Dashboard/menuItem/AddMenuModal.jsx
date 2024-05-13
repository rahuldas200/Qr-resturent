import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useOpen } from "../../../contexts/OpenContext";
import { RxCross1 } from "react-icons/rx";
import ImgUploader from "../category/ImgUploader";

const AddMenuModal = () => {
  const { restaurantCategory } = useSelector((state) => state.menu);
  const { open, setOpen } = useOpen();
  const [imageSrc,setImageSrc] = useState(null);
  const [preview, setPreview] = useState(null);


  return (
    <div className="h-screen flex justify-center items-center w-screen absolute top-0 left-0 bg-[#45973071]">
      <div action="" className="min-w-[30%] bg-richwhite-100 p-3 rounded-sm">
        <div className="flex justify-between">
          <p>Add menu item </p>
          <button onClick={() => setOpen(null)}>
            <RxCross1 />
          </button>
        </div>
        <form action="" className="mt-5 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label
              for="Category"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select name="Category" id="" className="p-2 rounded-sm">
              <option >Select category</option>
              {restaurantCategory.map((item) => (
                <option value={item._id} className="" key={item._id}>
                  {item.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Item mane</label>
            <input type="text"  className="p-2"/>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="sort-details">Short details</label>
            <textarea className="p-2" name="sort-details" id=""></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Price</label>
            <input className="p-2" type="number" name="" id="" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Add thampnail</label>
            <ImgUploader
                setImageSrc={setImageSrc}
                preview={preview}
                setPreview={setPreview}
            />
          </div>
          <div className=" flex justify-center mt-4">
            <button className="p-2 bg-black text-white rounded-sm">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenuModal;
