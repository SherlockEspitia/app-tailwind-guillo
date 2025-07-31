import axios from 'axios';

const API_URL = "http://localhost:3000/usuarios"

const apiClient = axios.create({
    baseURL: API_URL,
    headers:{
        "Content-Type":'application/json'
    },
    timeout:5000
})

const userService = {
    getUser: async ()=>{
        try{
            const {data} = await apiClient.get('/')
            return data
        }
        catch(error){
            console.error("Error fetching users: ", error)
            throw error.response?.data?.message || error.message || "Error desconocido al obtener usuario"
        }
    },

    getUserById: async(id)=>{
        try {
            const {data} = await apiClient.get(`/${id}`)
            return data 
        } catch (error) {
            console.error("Error fetching users: ",error)
        }
    }
}