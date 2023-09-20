
import { StyleSheet } from 'react-native';
import { colors } from './src/theme/colors';
import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RouteNavigation from './src/navigation/RouteNavigation';

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
    <NavigationContainer style={styles.containerPrincipal}>
      <RouteNavigation />
    </NavigationContainer>
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

  }

});
