import { View,  FlatList, StyleSheet } from "react-native";
import React from "react";
import { categorias } from "../data/categorias";
import CategoryItem from "./CategoryItems";

const Categorias= () => {
    return (
        <View style={styles.container}>
            <FlatList 
            data={categorias}
            keyExtractor={(key) => key}
            renderItem={({item}) => <CategoryItem item = {item}/>}
        />   
        </View>
    )
}
const styles = StyleSheet.create ({
})
export default Categorias
