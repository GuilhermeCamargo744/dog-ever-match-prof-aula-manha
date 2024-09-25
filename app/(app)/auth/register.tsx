import { RegisterScreen } from "@/src/screens/auth/register";
import { Stack } from "expo-router";


export default function Register () {
    return(
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Cadastrar",
                    headerTintColor: "#FFF",
                    headerStyle: {
                        backgroundColor: "#ffc42d"
                    },
                    headerTitleAlign: "center"
                }}
            />
            <RegisterScreen/>
        </>
    )
}