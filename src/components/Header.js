import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";



const Header = ({title}) => {
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
        height: 85,
        width: "100%",
        backgroundColor: colors.mediumOrange,
        alignItems: "center",
        justifyContent: "center"
    },
    fontText: {
        fontSize: 25,
        fontWeight: "600",
        color: colors.heavyGray

    }

})
export default Header
