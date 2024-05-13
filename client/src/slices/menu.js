import { createSlice } from "@reduxjs/toolkit";

const initialStage = {
    restaurantCategory:localStorage.getItem("restaurantCategory") ? JSON.parse(localStorage.getItem("restaurantCategory")) : null,
    restaurantMenu:localStorage.getItem('restaurantMenu') ? JSON.parse(localStorage.getItem('restaurantMenu')) : null,
}

const menuSlice = createSlice({
    name:"menu",
    initialState:initialStage,

    reducers:{
        setRestaurantCategory(state,action){
            state.restaurantCategory = action.payload;
            localStorage.setItem("restaurantCategory", JSON.stringify(action.payload));
        },
        setRestaurantMenu(state,action){
            state.restaurantMenu = action.payload;
            localStorage.setItem("restaurantMenu", JSON.stringify(action.payload));
        },
    }
})

export const {setRestaurantCategory,setRestaurantMenu} = menuSlice.actions;
export default menuSlice.reducer;