import { configureStore } from "@reduxjs/toolkit";
import tournamentslice from "./tournamentslice";

const store = configureStore({
    reducer: {
        // Here we will be adding reducers
        tournament : tournamentslice
    }
})

export default store;

