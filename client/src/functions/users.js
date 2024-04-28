import { server } from '@/helpers/server';

export const getUsers = async (setUsers) => {
    try {
        const response = await server.get('/api/users')
        if (response.status === 200){
            setUsers(response.data)
        }
    } catch(error){
        console.log(error)
    }
}

export const getUsersById = async (id, setUsers) => {
    try {
        const response = await server.get(`/api/users/${id}`)
        if (response.status === 200){
            setUsers(response.data)
        }
    } catch(error){
        console.log(error)
    }
}

export const createUser = async (users) => {
    try {
        const response = await server.post('/api/users', users)
        if (response.status === 200){
            return 'Register succesful, you can now login'
        }
    } catch(error){
        console.log(error)
        if (error.response.data.message.startsWith('E11000 duplicate key error collection:')){
            return 'Email already in use'
        }
        return 'An error ocurried'
    }
}