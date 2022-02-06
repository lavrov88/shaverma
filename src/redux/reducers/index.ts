import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import navMenuReducer from "./navMenu";
import shavermasReducer from "./shavermas";


const rootReducer = combineReducers({
   navMenu: navMenuReducer,
   shavermas: shavermasReducer,
   cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer