import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";
import menuReducer from '../slices/menu'


const rootReducer = combineReducers({
   auth:authReducer,
   menu:menuReducer,
});

export default rootReducer