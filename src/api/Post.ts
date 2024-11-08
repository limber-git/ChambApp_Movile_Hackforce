import axios from "axios";
import { LoginInterface } from "../app/interface/LoginInterface";
import Environments from "../utils/Environments";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const login = async ({ email, password, typeLogin }: LoginInterface) => {
    const type = await AsyncStorage.getItem(Environments.modeApplication.key); // obtiene el tipo de usuario
    const isAdmin = type === Environments.modeApplication.admin;
    const url = type === Environments.modeApplication.admin
        ? Environments.production.loginWebPage
        : Environments.production.loginPlus;

    const format = {
        [isAdmin ? "correo" : "email"]: email,
        password: password
    } 
    try {
        const response = await axios.post(url, format, {
            withCredentials: true,
        })

        return response.data;
    } catch (error:any) {
        console.log(JSON.stringify(error?.message))
        return false
    }

}

export const validateToken = async (token: string) => {
    
    try {
        const response = await axios.post('users/valid/token', {
            token: token
        }, {
            withCredentials: true,
        })
        return response.data;
    } catch (error:any) {
        console.log(JSON.stringify(error))
        return false
    }
}