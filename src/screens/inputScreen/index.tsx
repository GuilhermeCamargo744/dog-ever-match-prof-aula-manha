import { ButtonCustom } from "@/src/components/buttonCustom"
import LottieView from "lottie-react-native"
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native"
import { style } from "./styles"

export const InputScreen = () => {

    return(
      <View
        style={style.containerStyle}
      >
        <Text>Hellow world</Text>
        {
          Platform.OS != "web" && 
          <LottieView
          autoPlay
          style={style.animationStyle}
          source={require("../../lottieFiles/animation-tela-principal.json")}
        />
        }
        
        <ButtonCustom titleButton="Cadastrar" />
        <ButtonCustom 
          titleButton="Entrar" 
          styleContainer={{backgroundColor: "#FFC42D" }} 
          styleText={{color: "#FFF"}}
        />
      </View>
    )
}
