import { ButtonCustom } from "@/src/components/buttonCustom"
import { colors } from "@/src/utils/colors"
import { Text, View } from "react-native"

import {styles} from "./styles"
import { InputWithTitle } from "@/src/components/inputWithTitle"

export const LoginScreen = () => {
    return(
        <View
            style={styles.container}
        >
            <Text style={styles.title}>
                DogEverMatch
            </Text>
            <InputWithTitle/>
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