import {authEndpoints} from '../apis'
import { apiConnector } from '../apiConnector'
import { setLoading,setToken } from '../../slices/auth';
import { toast } from 'react-toastify';

const {
    SEND_OPT,
    LOGIN_API,
    REGISTATION,

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


export const registation = async (email,password) => {

    let result = null;
    setLoading(true);
    try {

        const response = await apiConnector("POST",REGISTATION,email,password);

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
    try{
        const response = await apiConnector("POST",LOGIN_API,data);

        console.log(response);
        const userId = response.data.user?._id;
        if(response.data.success === true){
            toast.success(response.data.message);
            localStorage.setItem("token",JSON.stringify(response?.data?.user?.token))
            dispatch(setToken(response?.data?.user?.token))
            // dispatch(setUserData(response.data.user));
            navigate(`/dashboard/${userId}`)
        }
        else toast.error(response.data.message);

    } catch (error){
        console.log(error)
    }
    toast.dismiss(id);
}
