import axios from "axios"
import { getToken } from "../utils/asyncStorage/loginStorage"

interface ILogin {
    password: string,
    email: string
}


const baseUrl = "http://10.0.92.174:3000"

const url_login_api = `${baseUrl}/auth/login`
const url_get_all_dogs = `${baseUrl}/dogs/getAllDogs`


export const loginApi = async (payload: ILogin) => 
    await axios.post(url_login_api, payload)
    .then((response) => response)
    .catch((error) => console.log("ERRO LOGIN", error))



export const getAllDogs = async () => {
    const token = await getToken()

    const reqApi = await axios.get(url_get_all_dogs, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        return response
    }).catch((error) => console.log("ERROR GETALLDogs", error))

    return reqApi
}