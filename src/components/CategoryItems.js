import {  Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import  {colors}  from "../theme/colors";
import { setCategory } from "../redux/slice/homeSlice";
import { useDispatch } from "react-redux";


const CategoryItem = ({item, navigation}) =>{
    const dispatch = useDispatch ();
    
    const onHandItem = () => {
        
        dispatch(setCategory(item))
        navigation.navigate("productos", {item: item}) 

    }
    return (  
        <Pressable style={styles.containPrincipal} onPress={() => onHandItem()}>
           
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

