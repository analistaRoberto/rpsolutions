import { View, Text, StyleSheet, Image  } from "react-native";
import React from "react";
import { colors } from "../theme/colors";


const ProductosItem = ({item}) => {
    return (
        <View style={styles.container}>
           <Text style= {styles.text}>{item.title}</Text>
           <Text style= {styles.text}>{item.price}</Text>
           <Image height={50} width={50} source={{uri: item.images[0] }} />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginHorizontal: 20,
        marginVertical: 10, 
        borderColor: colors.heavyGray, 
        borderRadius: 10, 
        borderWidth: 2,
        height: 120,
        justifyContent: "center",
        paddingRight: 10
    },
    text: {
        marginLeft: 10,
        fontWeight: "700"
    } 

})
export default ProductosItem