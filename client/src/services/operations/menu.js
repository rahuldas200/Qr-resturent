import {menuEndpoints} from '../apis'
import { apiConnector } from '../apiConnector'
import { setLoading,setToken,setRestaurantData } from '../../slices/auth';
import {setRestaurantCategory} from '../../slices/menu'
import { toast } from 'react-toastify';

const {
    CREATE_CATEGORY_API
} = menuEndpoints;

export const createCategory = async (formData,token,dispatch) => {
    const toastId = toast.loading("Loading...")
    try{
        const response = await apiConnector(
            "POST",
            CREATE_CATEGORY_API,
            formData,
            {Authorization: `Bearer ${token}`,}
        )
        console.log(response);
        if( response.data.success === true){
            toast.success(response.data.message);
            dispatch(setRestaurantCategory(response.category));
        }
        else {
            toast.error(response.data.message);
           
        }
        toast.dismiss(toastId);

    } catch (error){
        console.log(error);
        throw new Error("createCategory api error",error);
        
    }
    toast.dismiss(toastId);
    
}