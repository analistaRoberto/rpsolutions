import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { products } from "../data/Productos";
import ProductosItem from "../components/ProductosItem";
import { colors } from "../theme/colors";
import { Ionicons } from '@expo/vector-icons';

const Productos = ({ route, navigation }) => {
    const [categoriaProductos, setCategoriaPro] = useState([]);
    const [text, setText] = useState(null);
    const { item } = route.params

    useEffect(() => {
        const categoriaProductos = products.filter((el) => el.category === item);
        setCategoriaPro(categoriaProductos);

        if (text) {
            const tituloProducto = products.filter((el) => el.title.toLowerCase() === text.toLowerCase())
            setCategoriaPro(tituloProducto);
        }
    }, [text, item]);

    return (

        <View style={styles.contain}>
            <Header title={item} />
            <Search text={text} setText={setText} />

            <Pressable style={styles.icons} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle-outline" size={34} color="white" />
            </Pressable>




            <FlatList
                data={categoriaProductos}
                keyExtractor={products.id}
                renderItem={({ item }) => <ProductosItem navigation={navigation} item={item} />}
            />
        </View>
    )
}
export default Productos
const styles = StyleSheet.create({
    contain: {
        backgroundColor: colors.contFonts
    },
    icons: {

        position: 'absolute',
        top: 80,
        left: 16,
    }

})