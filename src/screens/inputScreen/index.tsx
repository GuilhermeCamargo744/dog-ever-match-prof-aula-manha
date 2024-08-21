import { ButtonCustom } from "@/src/components/buttonCustom"
import { Text, View } from "react-native"

export const InputScreen = () => {
    return(
      <View>
        <Text>Hellow world</Text>
        <ButtonCustom titleButton="Cadastrar" />
        <ButtonCustom 
          titleButton="Entrar" 
          styleContainer={{backgroundColor: "#FFC42D" }} 
          styleText={{color: "#FFF"}}
        />
      </View>
    )
}
