import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingTop: 12
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: colors.PRIMARY
    }
})