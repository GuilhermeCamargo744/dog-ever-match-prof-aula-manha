import { ButtonCustom } from "@/src/components/buttonCustom"
import { colors } from "@/src/utils/colors"
import { Text, View } from "react-native"


export const LoginScreen = () => {
    return(
        <View
            style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text>
                DogEverMatch
            </Text>
            <ButtonCustom
                titleButton="Entrar"
                styleContainer={{
                    backgroundColor: colors.PRIMARY,
                }}
                styleText={{
                    color: colors.WHITE
                }}
            />
        </View>
    )
}