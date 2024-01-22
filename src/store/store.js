import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authslice";
import tournamentslice from "./tournamentslice";

const store = configureStore({
    reducer: {
        // Here we will be adding reducers
        auth : authSlice,
        tournament : tournamentslice
    }
})

export default store;

