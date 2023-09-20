import { View, Text, StyleSheet, Image, Pressable  } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { useWindowDimensions } from "react-native";                                                                                                                                                                                                                            

const ProductosItem = ({item, navigation}) => {
    const {height, width} = useWindowDimensions()
   
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate("productDetail", { item })}>
                <Text style= {styles.text}>{item.title}</Text>
            </Pressable>
           <Image style = {styles.image}  source={{uri: item.images[0]}} />
        </View>
    );
};
const styles = StyleSheet.create ({
    container: {
        marginHorizontal: 20,
        marginVertical: 10, 
        borderColor: colors.heavyGray, 
        borderRadius: 10, 
        borderWidth: 2,
        height: 120,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems: "center",
        alignContent: "center",
        padding: 18,
        backgroundColor: colors.headerButton,
    },
    text: {
        marginLeft: 10,
        fontWeight: "700",
        fontFamily: "playCuerpo",
        fontSize: 20,
        color: colors.contFonts
    },
    image: {
        height: 80,
        width: 60,
    }
})
export default ProductosItem
