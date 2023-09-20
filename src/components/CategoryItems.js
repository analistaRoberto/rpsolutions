import {  Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import  {colors}  from "../theme/colors";

const CategoryItem = ({item, navigation}) =>{
    return (  
        <Pressable style={styles.containPrincipal} onPress={() => navigation.navigate("productos", {item: item}) }>
           
            <Text style={styles.texto} >
                {item}
            
            </Text>
            
        </Pressable>
    );
};

const styles = StyleSheet.create ({
    containPrincipal: {
        backgroundColor: colors.contFonts,
        alignItems: "center"
    },
    texto: {
       color: colors.softOrange,
        fontSize: 24,
        margin: 5,
        alignItems: "center",
        width: "90%",
        borderWidth: 1,
        borderColor: colors.headerButton,
        borderRadius: 15,
        textAlign: 'center',
        padding: 4
    }
})
export default CategoryItem

