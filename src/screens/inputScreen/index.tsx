import { ButtonCustom } from "@/src/components/buttonCustom"
import LottieView from "lottie-react-native"
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native"
import { style } from "./styles"
import { router } from "expo-router"

export const InputScreen = () => {

    return(
      <View
        style={[style.containerStyle]}
      >
        <Text
          style={style.styleTitle}
        >DogEverMatch</Text>
        {
          Platform.OS != "web" && 
          <LottieView
          autoPlay
          style={style.animationStyle}
          source={require("../../lottieFiles/animation-tela-principal.json")}
        />
        }
        
        <ButtonCustom 
          titleButton="Cadastrar" 
          handleClick={() => {}}
          styleContainer={{
            marginTop: 40,
            marginBottom: 32
          }}
        />
        <ButtonCustom 
          titleButton="Entrar" 
          styleContainer={{backgroundColor: "#FFC42D" }} 
          styleText={{color: "#FFF"}}
          handleClick={() => router.navigate("/(app)/auth/login")}
        />
      </View>
    )
}
