import { LoginScreen } from "@/src/screens/auth/login";
import { Stack } from "expo-router";


export default function Login () {
    return(
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Entrar",
                    headerTintColor: "#FFF",
                    headerStyle: {
                        backgroundColor: "#ffc42d"
                    },
                    headerTitleAlign: "center"
                }}
            />
            <LoginScreen/>
        </>
    )
}