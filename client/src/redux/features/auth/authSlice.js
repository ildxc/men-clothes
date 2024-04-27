import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    firstName: '',
    lastName: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveUser: (state, action) => {
            state = action.payload
        },
        logout: (state, _) => {
            state = {
                email: '',
                firstName: '',
                lastName: ''
            }
        }
    }
})

export const {saveUser, logout} = authSlice.actions
export const selectUser = (state) => state.auth
export default authSlice.reducer