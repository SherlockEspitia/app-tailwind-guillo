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
            const response = await apiClient.get(`/${id}`)
            return response.data 
        } catch (error) {
            console.error(`Error fetching users with ${id}: `,error);
            throw error.response?.data?.message || error.message || `Error desconocido al obtener usuario con ID ${id}`
        }
    },

    createUser: async(userData)=>{
        try {
            const response = await apiClient.post('/',userData);
            return response.data
        } catch (error) {
            console.error("Error creando el usuario:", error)
            throw error.response?.data?.message || error.message || `Error desconocido al crear usuario ${userData}`
        }
    },

    updateUser: async(id, userData)=>{
        try {
            const response = await apiClient.put(`/${id}`, userData);
            return response.data
        } catch (error) {
            console.error(`Error updating user with ID ${id}:`,error)
            throw error.response?.data?.message || error.message || `Error desconocido al actualizar usuario con ID ${id}`
        }
    },
    
    deleteUser: async(id)=>{
        try {
            const response = await apiClient.delete(`/${id}`);
            return response.data
        } catch (error) {
            console.error(`Error deleting user with ID ${id}:`,error)
            throw error.response?.data?.message || error.message || `Error desconocido al actualizar usuario con ID ${id}`
        }
    }

}

export default userService