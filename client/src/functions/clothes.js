import axios from 'axios';

export const getClothes = async (setClothes) => {
    try {
        const response = await axios.get('http://localhost/api/clothes')
        if (response.status === 200){
            setClothes(response.data)
        }
    } catch(error){
        console.log(error)
    }
}

export const getClothesById = async (id, setClothes) => {
    try {
        const response = await axios.get(`http://localhost/api/clothes/${id}`)
        if (response.status === 200){
            setClothes(response.data)
        }
    } catch(error){
        console.log(error)
    }
}

export const createClothes = async (clothes) => {
    try {
        const response = await axios.post('http://localhost/api/clothes', clothes)
        if (response.status === 200){
            console.log('Clothes created')
        }
    } catch(error){
        console.log(error)
    }
}

export const updateClothes = async (id, clothes) => {
    try {
        const response = await axios.put(`http://localhost/api/clothes/${id}`, clothes)
        if (response.status === 200){
            console.log('Clothes updated')
        }
    } catch(error){
        console.log(error)
    }
}

export const getClothesByType = async (type, setClothes) => {
    try {
        const response = await axios.get(`http://localhost/api/clothes?type=${type}`)
        if (response.status === 200){
            setClothes(response.data)
        }
    } catch(error){
        console.log(error)
    }
}