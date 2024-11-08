import { Alert } from "react-native"

export const SuccessAlert = (title:string,message:string) =>{
    Alert.alert(
        title??"Success",
        message??"The operation was successful",
        [
            {
                text: 'Ok',
                onPress: () => console.log('Ok Pressed'),
            },
        ],
        { cancelable: false },
    )
}