import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { 
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
            localStorage.setItem('user', JSON.stringify(state.userData))
        },

        logout: (state) => {
            state.status = false;
            state.userData = null;
            localStorage.removeItem('user')
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;