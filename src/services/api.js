import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY

axios.defaults.baseURL = `https://${API_KEY}.mockapi.io`


export const getContacts = async () => {
    try {
        const {data} = await axios.get('/contacts')  

        return data
    } catch (e) {
        console.error(e)
    }
}

export const createContact = async (contact) => {
    try {
        axios.post(`/contacts`, contact)
    } catch (e) {
        console.error(e);
    }
}

export const deleteContact = async (id) => {
    try {
        await axios.delete(`/contacts/${id}`)  
    } catch (e) {
        console.error(e)
    }
}