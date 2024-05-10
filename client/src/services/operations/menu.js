import {menuEndpoints} from '../apis'
import { apiConnector } from '../apiConnector'
import { setLoading,setToken,setRestaurantData } from '../../slices/auth';
import { toast } from 'react-toastify';

const {
    CREATE_CATEGORY_API
} = menuEndpoints;

export const createCategory = async (formData,token) => {
    try{
        const response = await apiConnector(
            "POST",
            CREATE_CATEGORY_API,
            formData,
            {Authorization: `Bearer ${token}`,}
        )

        console.log(response);

    } catch (error){
        console.log(error);
        throw new Error("createCategory api error",error);
        
    }
}