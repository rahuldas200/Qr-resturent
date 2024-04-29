import { createSlice } from "@reduxjs/toolkit";

const initilaState = {
    restaurantData: localStorage.getItem("restaurantData") ? JSON.parse(localStorage.getItem("restaurantData")) : null,
    loading: false,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
}

const authSlice = createSlice({
    name:"auth",
    initialState:initilaState,

    reducers:{
        setRestaurantData(state, action) {
            state.restaurantData = action.payload;
            localStorage.setItem("restaurantData", JSON.stringify(action.payload));
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
            localStorage.setItem("token", JSON.stringify(action.payload));
        },
    }

})

export const { setRestaurantData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;
