import axios from "axios"
axios.defaults.withCredentials = true
export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,

})
axiosClient.defaults.withCredentials = true