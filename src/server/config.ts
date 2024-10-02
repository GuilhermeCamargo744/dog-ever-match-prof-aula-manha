import axios from "axios"

interface ILogin {
    password: string,
    email: string
}


const baseUrl = "http://10.0.92.174:3000"

const url_login_api = `${baseUrl}/auth/login`


export const loginApi = async (payload: ILogin) => 
    await axios.post(url_login_api, payload)
    .then((response) => response)
    .catch((error) => console.log("ERRO LOGIN", error))