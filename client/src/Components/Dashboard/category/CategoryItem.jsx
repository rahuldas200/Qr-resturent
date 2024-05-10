import React, { useEffect, useState } from "react";
import { createCategory } from "../../../services/operations/menu";
import { useSelector } from "react-redux";
const CategoryItem = () => {
  const [categoryList, setCetegorylist] = useState([]);
//   const {token} = useSelector( (state) => state.auth);

//   useEffect( () => {
//     const fetchData = async () => {
//         const response = await createCategory(data,token)
//     }
//     fetchData();
//   },[])

  return (
    <div className="p-2">
      {categoryList !== null ? (
        <div>
          <p>Menu category list is not avaiable</p>
        </div>
      ) : (
        <div>

        </div>
      )}
    </div>
  );
};

export default CategoryItem;
