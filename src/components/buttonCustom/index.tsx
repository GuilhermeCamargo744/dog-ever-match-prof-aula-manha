import { TouchableOpacity, View, Text, StyleProp, ViewStyle, TextStyle } from "react-native"
import { style } from "./styles"

interface IProps {
    titleButton: string,
    styleContainer?: StyleProp<ViewStyle>,
    styleText?: StyleProp<TextStyle>,
    handleClick: () => {}
}

export const ButtonCustom = ({titleButton, styleContainer, styleText, handleClick}:IProps ) => {
    return(
        <View>
            <TouchableOpacity 
            onPress={handleClick}
            style={[style.button, styleContainer]}>
                 <Text style={[style.title, styleText]}>
                    {titleButton}
                 </Text>
            </TouchableOpacity>  
        </View>
    )
}