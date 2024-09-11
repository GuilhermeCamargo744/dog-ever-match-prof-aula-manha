import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"


export const InputWithTitle = () => {
    return(
        <View
            style={styles.container}
        >
            <Text
                style={styles.title}
            >
                TESTE
            </Text>
            <TextInput
                style={styles.styleInput}
            />
        </View>
    )
}