import axios from "axios";

export const login = async (email, password) => {
    try {
        const response = await axios.post('http://localhost/api/auth/login', {email, password})
        if (response.status === 200){
            console.log('User logged in')
        }
    } catch(error){
        console.log(error)
    }
}