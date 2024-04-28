import { server } from '@/helpers/server';

export const getClothes = async (setClothes) => {
    try {
        const response = await server.get('/clothes')
        if (response.status === 200){
            setClothes(response.data)
        }
    } catch(error){
        console.log(error)
    }
}

export const getClothesById = async (id, setClothes) => {
    try {
        const response = await server.get(`/clothes/${id}`)
        if (response.status === 200){
            setClothes(response.data)
        }
    } catch(error){
        console.log(error)
    }
}

export const createClothes = async (clothes) => {
    try {
        const response = await server.post('/clothes', clothes)
        if (response.status === 200){
        }
    } catch(error){
        console.log(error)
    }
}

export const updateClothes = async (id, clothes) => {
    try {
        const response = await server.put(`/clothes/${id}`, clothes)
        if (response.status === 200){
        }
    } catch(error){
        console.log(error)
    }
}

export const getClothesByType = async (type, setClothes) => {
    try {
        const response = await server.get(`/clothes?type=${type}`)
        if (response.status === 200){
            setClothes(response.data)
        }
    } catch(error){
        console.log(error)
    }
}