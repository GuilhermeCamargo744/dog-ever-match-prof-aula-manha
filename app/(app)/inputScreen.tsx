import { InputScreen } from "@/src/screens/inputScreen";
import { Stack } from "expo-router";


export default function InputScreenApp() {
    return(
        <>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <InputScreen/>
        </>
    )
}