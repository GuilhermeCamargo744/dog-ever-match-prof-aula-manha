import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";



export const style = StyleSheet.create({
    animationStyle: {
      width: 300,
      height: 300
    },
    containerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        width: "100%"
    },
    styleTitle: {
      fontSize: 32,
      fontWeight: "bold",
      color: colors.PRIMARY,
      marginBottom: 24
    }
})
  