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
        }
    }
})

export const {setData, setIsAdmin} = tournamentSlice.actions;

export default tournamentSlice.reducer;