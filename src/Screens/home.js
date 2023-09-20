import { FlatList,  View } from "react-native";
import React from "react";
import Header from "../components/Header";
import CategoryItem from "../components/CategoryItems";
import { categorias } from "../data/categorias";
import { useNavigation } from "@react-navigation/native";
  
const Home = ({navigation}) => {
    return (
        <View>
           <Header title ="Categorias" navigation={navigation} />
           <FlatList 
            data={categorias}
            keyExtractor={(key) => key}
            renderItem={({item}) => <CategoryItem navigation={navigation} item = {item}/>}
        />   
        </View>
    )
}
export default Home
