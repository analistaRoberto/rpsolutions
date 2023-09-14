import { View, Text, FlatList, } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { products }from "../data/Productos";
import ProductosItem from "../components/ProductosItem";
import { TextInput } from "react-native";


const Productos = ({ category }) => {
   const [categoriaProductos, setCategoriaPro] = useState([]);
   const [text, setText] = useState(null);
   
   console.log("gfg", text)
   console.log("categry Prod", categoriaProductos)
   
   useEffect (()=> {
        const categoriaProductos = products.filter((el)=> el.category === category);
        setCategoriaPro(categoriaProductos);
        // console.log(categoriaProductos);

        if (text) {
            const tituloProducto = products.filter((el) => el.title.toLowerCase() === text.toLowerCase())
            setCategoriaPro(tituloProducto);
        }
    },[ text, category]);
    
    return (
        <View>
            
            <Header title = "Productos" />
            <Search text={text} setText={setText}/>
            <FlatList
            data = {categoriaProductos}
            keyExtractor={products.id}
            renderItem={({item}) => <ProductosItem item={item} />}
            />
        </View>
    )
}
export default Productos