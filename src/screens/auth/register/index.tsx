import { useState } from "react"
import {Text, View} from "react-native"
import { styles } from "./styles"
import { InputWithTitle } from "@/src/components/inputWithTitle"
import { ButtonCustom } from "@/src/components/buttonCustom"
import { colors } from "@/src/utils/colors"

export const RegisterScreen = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")

    return(
        <View
            style={styles.container}
        >
            <Text style={styles.title}>
                DogEverMatch
            </Text>
            <InputWithTitle
                setText={setNome}
                title="Nome:"
            />
            <InputWithTitle
                setText={setEmail}
                title="E-mail:"
            />
            <InputWithTitle
                setText={setSenha}
                title="Senha:"
            />
            <InputWithTitle
                setText={setConfirmarSenha}
                title="Confirmar senha:"
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
                handleClick={() => {}}
            />
        </View>
    )
}