import { FlatList,  View } from "react-native";
import React from "react";
import Header from "../components/Header";
import CategoryItem from "../components/CategoryItems";
import { useSelector } from "react-redux";
  
const Home = ({navigation}) => {

    const categories = useSelector((state) => state.homeSlice.allCategories);
    
     
    return (
        <View>
           <Header title ="Categorias" navigation={navigation} />
           <FlatList 
            data={categories}
            keyExtractor={(key) => key}
            renderItem={({item}) => <CategoryItem navigation={navigation} item = {item}/>}
        />   
        </View>
    )
}
export default Home