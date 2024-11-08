import axios from "axios";

export const getProfile = async (token: string) => {
    try {
        const response = await axios.get('users/valid/token/mobile')
        return response.data;
    } catch (error) {
        return false
    }
}