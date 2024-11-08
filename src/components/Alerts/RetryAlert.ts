import { Alert } from "react-native";


export const RetryAlert = (title: string, message: string, retry: () => void) => {
    Alert.alert(
        title??"Error",
        message??"An error occurred, please try again",
        [
            {
                text: 'Retry',
                onPress: () => retry(),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
        ],
        { cancelable: false },
    );
}