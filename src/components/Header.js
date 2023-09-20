import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import { colors } from "../theme/colors";
 
const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.fontText}>
                {title}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 120,
        width: "100%",
        backgroundColor: colors.headerButton,
        alignItems: "center",
        justifyContent: "center"
    },
    fontText: {
        fontSize: 40,
        fontWeight: "600",
        color: colors.contFonts,
        fontFamily: "playTitulo"

    },
})
export default Header
