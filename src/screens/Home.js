import React , {useState, useeffect, Component} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import registerNNPushToken from "native-notify";
import { View, StyleSheet, Button, Linking } from 'react-native';
import { Constants } from 'expo';
import {ScrollView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
// import MyDrawer from '../components/MyDrawer';


const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const itemWidth = screenWidth / 3;

  


const HomeScreen = () => {
    const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
{/* 
      <TouchableOpacity onPress={() => navigation.navigate('MyDrawer', {screen: 'Men'})}>
        <Text>Go to Men screen</Text>
      </TouchableOpacity> */}

        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Men")}}>
          <Text style={styles.buttonText}>For the Men</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Women")}}>
          <Text style={styles.buttonText}>For the Women</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Kids")}}>
          <Text style={styles.buttonText}>For the Kids</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Misc")}}>
          <Text style={styles.buttonText}>Miscellaneous</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={ ()=>{navigation.navigate('Gamers')}}>
          <Text style={styles.buttonText}>For The Gamers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={ ()=>{navigation.navigate('Geeks')}}>
          <Text style={styles.buttonText}>For The Geeks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={ ()=>{navigation.navigate('Techies')}}>
          <Text style={styles.buttonText}>For The Techies</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={ ()=>{navigation.navigate('Funny')}}>
          <Text style={styles.buttonText}>Funny</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={ ()=>{navigation.navigate('Under30')}}>
          <Text style={styles.buttonText}>Under $30</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9DCDB',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    width: itemWidth,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#2D6AB7',
    borderColor: '#fff',
    borderWidth: 3,
    background:  'linear-gradient(to bottom,#4f4f4f, #2D6AB7)'
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default HomeScreen;
