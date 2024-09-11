import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    title: {
        color: colors.BLACK,
        textAlign: "left",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 8
    },
    styleInput: {
        height: 53,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.PRIMARY,
        paddingLeft: 15
    }
})