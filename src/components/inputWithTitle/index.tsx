import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"

interface IProps {
    title: string;
    setText: (value: string) => void;
}

export const InputWithTitle = ({setText, title}: IProps) => {

    return(
        <View
            style={styles.container}
        >
            <Text
                style={styles.title}
            >
                {title}
            </Text>
            <TextInput
                style={styles.styleInput}
                onChangeText={setText}
            />
        </View>
    )
}