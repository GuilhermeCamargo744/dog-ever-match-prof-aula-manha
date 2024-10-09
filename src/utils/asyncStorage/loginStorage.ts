import AsyncStorage from "@react-native-async-storage/async-storage"
import {Alert} from "react-native"

export const storeToken = async (token: string) => {
    try{
        await AsyncStorage.setItem("storeToken", token)
    } catch (error) {
        Alert.alert("Tente novamente", "Houve um erro interno!")
    }
}


export const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem("storeToken")
        return value
    } catch (error) {
        Alert.alert("Tente novamente", "Houve um erro interno!")
    }
}
