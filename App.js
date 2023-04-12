import React , {useState, useeffect, Component} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import registerNNPushToken from "native-notify";
import { View, StyleSheet, Button, Linking } from 'react-native';
import { Constants } from 'expo';

import HomeScreen from './src/screens/Home'
import Item from './src/components/Item'
import MyStack from './src/components/MyStack';
import MyDrawer from './src/components/MyDrawer';
// AppRegistry.registerComponent(GiftGivers, () => HomeScreen);
  const App = () => {
    return (
      <NavigationContainer style={styles.container}>
        {/* <MyDrawer/> */}
        <MyStack/>
      </NavigationContainer>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFF',
    },
  });


  export default App;