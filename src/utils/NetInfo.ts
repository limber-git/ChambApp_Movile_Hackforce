import { addEventListener } from '@react-native-community/netinfo';

const IsConnected = async () => { 
    try {
        return await addEventListener((state) => {
            return state.isConnected && state.isInternetReachable;
        });
    } catch (error) {
        return false;
    }
}
export default IsConnected;