import { View, Text, StyleSheet } from "react-native";
import React from "react";
import  {colors}  from "../theme/colors";

const CategoryItem = ({item}) =>{
    return (
        <View>
            <Text style={styles.texto}>
                {item}
               
            </Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    texto: {
       color: colors.softOrange,
        fontSize: 20,
        margin: 5,
        alignItems: "center",
        
        width: "96%",
        borderWidth: .3,
        borderColor: 'white',
        borderRadius: 15,
        textAlign: 'center',
        padding: 4
    }

})
export default CategoryItem

