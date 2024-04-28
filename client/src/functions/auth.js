import axios from "axios";
import { saveUser } from "@/redux/features/auth/authSlice";
import { server } from "@/helpers/server";

export const login = async (email, password, dispatch) => {
    try {
        const response = await server.post('/api/auth/login', {
            email: email,
            password: password
        })
        if (response.status === 200){
            dispatch(saveUser(response.data.user))
            return 'Logged in'
        }
        else if (response.status === 403){
            return 'Invalid credentials'
        }
    } catch(error){
        console.log(error)
        return 'An error ocurried'
    }
}