
import { StyleSheet } from 'react-native';
import { colors } from './src/theme/colors';
import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


export default function App() {

  const [fontLoader] = useFonts({
    shadows: require("./assets/Fonts/ShadowsIntoLight-Regular.ttf"),
    playTitulo: require("./assets/Fonts/Play-Bold.ttf"),
    playCuerpo: require("./assets/Fonts/Play-Regular.ttf")
  });
  if (fontLoader === false) {
    return;
  };

  return (
    <Provider store={store}>
      <NavigationContainer style={styles.containerPrincipal}>
        <TabNav />
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: colors.letterColor,

  },
  texto: {
    color: colors.descriptonColor,
    fontSize: 20

  },
 "plugins":  [
   [
    "expo-location", {
      "locationAlwaysWhenInUsePermissiom": "Permitir acceso a la aplication"
    }
   ]
 ]
});
