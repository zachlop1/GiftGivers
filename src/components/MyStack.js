import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home.js';
import Men from '../screens/Men.js';
import Item from './Item.js';
import WomenScreen from '../screens/Women.js';
import MiscScreen from '../screens/Misc.js';
import KidsScreen from '../screens/Kids.js';
import TechiesScreen from '../screens/Techies.js';
import GamersScreen from '../screens/Gamers.js';
import GeeksScreen from '../screens/Geeks.js';
import Under30Screen from '../screens/Under30.js';
import FunnyScreen from '../screens/Funny.js';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Men" component={Men} />
      <Stack.Screen name="Techies" component={TechiesScreen} />
      <Stack.Screen name="Funny" component={FunnyScreen} />
      <Stack.Screen name="Gamers" component={GamersScreen} />
      <Stack.Screen name="Geeks" component={GeeksScreen} />
      <Stack.Screen name="Under30" component={Under30Screen} />
      <Stack.Screen name="Women" component={WomenScreen} />
      <Stack.Screen name="Misc" component={MiscScreen} />
      <Stack.Screen name="Kids" component={KidsScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
