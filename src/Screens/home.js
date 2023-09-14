import { View, Text } from "react-native"; 
import React from "react";
import Header from "../components/Header";
import Categorias from "../components/categorias";                                                                                                                                                                                                                                 

const Home = ()=> {
    return (
        <View>
           <Header title ="Detalles" />
           <Categorias />
        </View>
    )
}
export default Home
