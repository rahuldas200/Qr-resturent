import { menuEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { setLoading, setToken, setRestaurantData } from "../../slices/auth";
import { setRestaurantCategory } from "../../slices/menu";
import { toast } from "react-toastify";

const { CREATE_CATEGORY_API, FETCH_RESTAURANT_CATEGORY } = menuEndpoints;

export const createCategory = async (formData, token, dispatch) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_CATEGORY_API, formData, {
      Authorization: `Bearer ${token}`,
    });
    console.log(response);
    if (response.data.success === true) {
      toast.success(response.data.message);
      dispatch(setRestaurantCategory(response?.data?.category));
    } else {
      toast.error(response.data.message);
    }
    toast.dismiss(toastId);
  } catch (error) {
    console.log(error);
    throw new Error("createCategory api error", error);
  }
  toast.dismiss(toastId);
};

// -- time 6:40 done at - 7:40

export const fetchRestaurantCategory = async (token, dispatch) => {
  try {
    const response = await apiConnector(
      "GET",
      FETCH_RESTAURANT_CATEGORY,
      null,
      { Authorization: `Bearer ${token}` }
    );
    if (response?.data.success === true) {
      toast.success(response.data.message);
      dispatch(setRestaurantCategory(response?.data?.data));
      result = response.data?.data;
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    throw new Error("fetchRestaurantCategory error",error)
  }
};
