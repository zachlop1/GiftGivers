import React from 'react';
import { FlatList } from 'react-native';
import items from './Item';
import { StyleSheet, View, Text, Image, Animated, Button } from 'react-native';
import { ScrollView } from 'react-native';
import {TouchableOpacity, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';


const MyList = ({ items, type }) => {
const [gifOpacity] = useState(new Animated.Value(0));
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const itemWidth = screenWidth / 3;


useEffect(() => {
    Animated.timing(gifOpacity, { toValue: 1, duration: 500, useNativeDriver: true }).start();
}, []);

const filteredItems = items.filter(item => item.type === type);

return (
    <FlatList
      data={filteredItems}
      scrollEnabled={true}
      numColumns={3}  // this will display 2 items per row
      renderItem={({ item }) => (
        <View style={{width: itemWidth, alignItems: 'center'}}>

                <Text style={{fontSize: 12, flexDirection: 'row' }}>{item.title}</Text>

            <Animated.View style={{ opacity: gifOpacity }}>
                <Image source={item.picture} style={{ width: itemWidth, height: 100 }} resizeMode='contain'/>
            </Animated.View>

            <TouchableOpacity onPress={() => {
    try {
        Linking.openURL(item.url);
    } catch (error) {
        console.warn("Could not open URL", error);
    }
}} style={[styles.button, styles.smallButton]} >
    <Text style={styles.buttonText}>Check It Out!</Text>
</TouchableOpacity>
  
        </View>
      )}
      keyExtractor={item => item.id}
    />
);
};

const styles = StyleSheet.create({
    button: {
      alignSelf: 'center',
      backgroundColor: '#2D6AB7',
      padding: 10,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 4,
    },
    smallButton: {
      width: 100,
      height:33,
    },
    buttonText: {
        color: '#fff',
        fontSize:10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        alignSelf: 'center'
      },
  });

export default MyList;