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
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        logout: (state, _) => {
            state.email = ''
            state.firstName = ''
            state.lastName = ''
        }
    }
})

export const {saveUser, logout} = authSlice.actions
export const selectUser = (state) => state.auth
export default authSlice.reducer