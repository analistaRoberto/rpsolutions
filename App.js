
import { SafeAreaView, StyleSheet,  View } from 'react-native';
import { colors } from './src/theme/colors'
import Header from './src/components/Header';
import Categorias from './src/components/categorias';
import React from 'react';
import Home from './src/Screens/home';
import Search from './src/components/Search';
import Productos from './src/Screens/Productos';


export default function App() {
  return (
    <SafeAreaView >

      {/* <Home /> */}
      {/* <Search /> */}
      <Productos Categorias = "smartphones"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: colors.mediumOrange,
    fontSize: 20

  }
  
});
