import {authEndpoints} from '../apis'
import { apiConnector } from '../apiConnector'
import { setLoading,setToken,setRestaurantData } from '../../slices/auth';
import { toast } from 'react-toastify';

const {
    SEND_OPT,
    LOGIN_API,
    REGISTATION,
    GET_USER_DATA_API

} = authEndpoints;

export const sendOtp = async (email) => {
    let result = null;

    setLoading(true);
    try{

        const response = await apiConnector("POST",SEND_OPT,{
            email
        });
        console.log(response);

        if(response.data.success === true){
            console.log('SEND_OTP response ..',response);
            toast.success(response.data.message);
            result = true;
        }
        else{
            toast.error(response.data.message);
        }
        

    } catch (error){
        console.log(error);
        result = false;
    }
    setLoading(false);
    return result;
    
    
}


export const registation = async (data) => {

    let result = null;
    console.log(data)
    setLoading(true);
    try {

        const response = await apiConnector("POST",REGISTATION,data);

        console.log(response);
        if(response.data.success !== false){
            toast.error(response.data.message);
        }

        toast.success(response.data.message)
        result = response.data;

    } catch (error){

        console.log(error);

    }
    setLoading(true);
    return result;
}

export const login = async (data,navigate,dispatch) => {
    
    const id =  toast.loading("connect with dashbord")

    dispatch(setLoading(true))
    try{
        const response = await apiConnector("POST",LOGIN_API,data);

        console.log(response);
        const userId = response.data.user?._id;
        if(response.data.success === true){
            toast.success(response.data.message);
            dispatch(setToken(response?.data?.user?.token))
            dispatch(setRestaurantData(response?.data));
            navigate(`/restaurant/${userId}`)
        }
        else toast.error(response.data.message);

    } catch (error){
        console.log(error)
    }
    toast.dismiss(id);
    dispatch(setLoading(false))
}


export const getUser = async (token) => {
    let result = null;

    try {
        const response = await apiConnector("GET", GET_USER_DATA_API,null, {
            Authorization: `Bearer ${token}`,
        });

        console.log(response.data); // Log the response data

        if (response.data.success !== false) {
            result = response.data.response; // Return the response data if success is not false
        } else {
            throw new Error("Failed to get user data"); // Throw an error if success is false
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
    console.log(result.response)
    return result;
}

