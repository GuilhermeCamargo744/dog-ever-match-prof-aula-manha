import { ButtonCustom } from "@/src/components/buttonCustom"
import { colors } from "@/src/utils/colors"
import { Text, View } from "react-native"

import {styles} from "./styles"
import { InputWithTitle } from "@/src/components/inputWithTitle"
import { useState } from "react"

export const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return(
        <View
            style={styles.container}
        >
            <Text style={styles.title}>
                DogEverMatch
            </Text>
            <InputWithTitle
                setText={setEmail}
                title="E-mail:"
            />

            <InputWithTitle
                setText={setSenha}
                title="Senha:"
            />
            <ButtonCustom
                titleButton="Entrar"
                styleContainer={{
                    backgroundColor: colors.PRIMARY,
                    position: "absolute",
                    bottom: 36
                }}
                styleText={{
                    color: colors.WHITE
                }}
            />
        </View>
    )
}