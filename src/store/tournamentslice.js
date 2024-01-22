import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAdmin : false,
    data : null
}

const tournamentSlice = createSlice({
    name: "tournament",
    initialState,
    reducers: { 
        setData: (state, action) => {
            state.data = action.payload;
        },

        setIsAdmin : (state, action) => {
            state.isAdmin = action.payload
        },

        clear : (state) => {
            state.isAdmin = false;
            state.data = null;
        }
    }
})

export const {setData, setIsAdmin, clear} = tournamentSlice.actions;

export default tournamentSlice.reducer;