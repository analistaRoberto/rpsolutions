import { View, Text, FlatList } from "react-native";
import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import {products }from "../data/Productos";
import ProductosItem from "../components/ProductosItem";

const Productos = ({Categorias}) => {
    console.log(Categorias)
    return (
        <View>
            
            <Header title = "Productos" />
            <Search />
            <FlatList
            data = {products}
            keyExtractor={(item) => item}
            renderItem={({item}) => <ProductosItem item={item} />}
            />
        </View>
    )
}
export default Productos